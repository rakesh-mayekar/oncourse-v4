#!/usr/bin/env python3
"""
OnCourse — stamp shared components into every wireframe page.

components/header.html and components/footer.html are the single source of truth.
Each page marks where they go:

    <!-- @component:header active="mba" -->
    ...generated, do not edit...
    <!-- /@component:header -->

    <!-- @component:breadcrumb trail="Undergraduate|undergraduate.html~Events" -->
    ...generated, do not edit...
    <!-- /@component:breadcrumb -->

    <!-- @component:footer -->            (or cta="home" to apply the slot overrides in components/footer-cta-home.html, or cta="none" to omit the CTA band)
    ...generated, do not edit...
    <!-- /@component:footer -->

Usage (from the project root):
    python3 scripts/sync-components.py          # rewrite pages
    python3 scripts/sync-components.py --check  # exit 1 if any page is out of date
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / 'oncourse-wireframe'
COMPONENTS = ROOT / 'components'
PAGES = ROOT / 'pages'

NAV_INACTIVE = 'text-gray-700 hover:text-black border-b-2 border-transparent pb-0.5 transition-colors'
NAV_ACTIVE = 'text-black font-bold border-b-2 border-black pb-0.5'
CHEVRON_INACTIVE = 'text-gray-400 group-hover:text-black'
CHEVRON_ACTIVE = 'text-black'

MARKER = re.compile(
    r'(?P<indent>[ \t]*)<!-- @component:(?P<name>\w+)(?P<attrs>[^>]*?) -->\n'
    r'.*?'
    r'[ \t]*<!-- /@component:(?P=name) -->',
    re.S,
)
SLOT = re.compile(r'(?P<open>[ \t]*<!-- @slot:(?P<name>[\w-]+) -->\n)(?P<body>.*?)(?P<close>\n[ \t]*<!-- /@slot:(?P=name) -->)', re.S)


def read_component(name):
    """Component file contents without its leading documentation comment."""
    text = (COMPONENTS / name).read_text(encoding='utf-8')
    if text.startswith('<!--'):
        text = text[text.index('-->') + 3:].lstrip('\n')
    return text.rstrip('\n')


def parse_attrs(raw):
    return dict(re.findall(r'(\w+)="([^"]*)"', raw))


def render_header(attrs):
    html = read_component('header.html')
    active = attrs.get('active', '')
    html = html.replace('<header id="global-header"', f'<header id="global-header" data-active="{active}"', 1)
    if not active:
        return html
    # The active top-level link (and its dropdown chevron) swaps to the bold/underlined style
    start = html.find(f'data-nav-id="{active}"')
    if start < 0:
        raise SystemExit(f'header: unknown active="{active}" (no matching data-nav-id)')
    end = html.index('</a>', start)
    link = html[start:end].replace(NAV_INACTIVE, NAV_ACTIVE, 1).replace(CHEVRON_INACTIVE, CHEVRON_ACTIVE, 1)
    return html[:start] + link + html[end:]


def render_footer(attrs):
    html = read_component('footer.html')
    cta = attrs.get('cta')
    if cta == 'none':
        # cta="none": page omits the CTA band entirely (FAQ pages, per client feedback)
        return re.sub(r'<section id="ambition-cta-wrapper".*?</section>\n\n', '', html, count=1, flags=re.S)
    if cta:
        # footer-cta-<name>.html holds one or more <!-- @slot:x --> blocks; each replaces the same-named slot
        overrides = {m.group('name'): m.group('body') for m in SLOT.finditer(read_component(f'footer-cta-{cta}.html'))}
        unknown = set(overrides) - {m.group('name') for m in SLOT.finditer(html)}
        if unknown:
            raise SystemExit(f'footer-cta-{cta}.html: unknown slot(s) {sorted(unknown)}')
        html = SLOT.sub(lambda m: m.group('open') + overrides[m.group('name')] + m.group('close') if m.group('name') in overrides else m.group(0), html)
    return html


def render_breadcrumb(attrs):
    """Home / ... / current page. trail="Label|href~Label|href~Current" (last item has no link)."""
    items = [i.split('|') for i in attrs['trail'].split('~')]
    parts = ['<a href="home.html" class="hover:text-black transition-colors">Home</a>']
    for i, item in enumerate(items):
        parts.append('<span>/</span>')
        if i == len(items) - 1:
            parts.append(f'<span class="text-gray-900 font-bold">{item[0]}</span>')
        else:
            parts.append(f'<a href="{item[1]}" class="hover:text-black transition-colors">{item[0]}</a>')
    body = '\n        '.join(parts)
    return ('<nav aria-label="Breadcrumb" class="bg-gray-100/80 border-b border-gray-200 py-2.5 text-xs font-mono text-gray-500">\n'
            '      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-x-2 gap-y-1">\n'
            f'        {body}\n'
            '      </div>\n'
            '    </nav>')


RENDERERS = {'header': render_header, 'footer': render_footer, 'breadcrumb': render_breadcrumb}


def sync_page(text):
    def replace(m):
        name, attrs = m.group('name'), m.group('attrs')
        if name not in RENDERERS:
            raise SystemExit(f'unknown component "{name}"')
        body = RENDERERS[name](parse_attrs(attrs))
        indent = m.group('indent')
        return f'{indent}<!-- @component:{name}{attrs} -->\n{body}\n{indent}<!-- /@component:{name} -->'
    return MARKER.sub(replace, text)


def main():
    check = '--check' in sys.argv
    stale = []
    for page in sorted(PAGES.glob('*.html')):
        text = page.read_text(encoding='utf-8')
        if '<!-- @component:' not in text:
            continue  # redirect stubs have no shared chrome
        updated = sync_page(text)
        if updated != text:
            stale.append(page.name)
            if not check:
                page.write_text(updated, encoding='utf-8')
    verb = 'out of date' if check else 'updated'
    print(f'{len(stale)} page(s) {verb}' + (': ' + ', '.join(stale) if stale else ''))
    return 1 if check and stale else 0


if __name__ == '__main__':
    sys.exit(main())
