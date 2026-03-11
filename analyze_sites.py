#!/usr/bin/env python3
from scrapling.parser import Selector
from urllib.request import urlopen
import json

sites = [
    'https://dualite.dev/?ref=saaspo.com',
    'https://interfere.com/?ref=saaspo.com',
    'https://twine.com/?ref=saaspo.com',
    'https://www.conway.ai/?ref=saaspo.com',
    'https://shade.inc/?ref=saaspo.com',
]

analysis = {}

for site in sites:
    try:
        print(f"📥 Analyzing {site.split('/')[2]}...")
        with urlopen(site, timeout=15) as response:
            html = response.read().decode('utf-8')
        
        page = Selector(html)
        
        data = {
            'title': page.css('title::text').get(),
            'h1': page.css('h1::text').get(),
            'hero_text': page.css('h1 + p::text').get() or page.css('section p::text').get(),
            'buttons': page.css('button::text, a[class*="button"]::text').getall()[:3],
            'sections_count': len(page.css('section')),
            'nav_items': page.css('nav a::text').getall()[:6],
        }
        analysis[site.split('/')[2]] = data
        print(f"✅ {site.split('/')[2]}")
    except Exception as e:
        print(f"❌ {site.split('/')[2]}: {e}")

print("\n" + "="*80)
print("ANALYSIS SUMMARY:")
print("="*80)
for site, data in analysis.items():
    print(f"\n🔗 {site}")
    print(f"   Title: {data['title'][:60]}...")
    print(f"   H1: {data['h1'][:60] if data['h1'] else 'N/A'}...")
    print(f"   Sections: {data['sections_count']}")
    print(f"   Nav Items: {', '.join(data['nav_items'][:3])}")
    print(f"   Buttons: {', '.join(data['buttons'])}")

with open('analysis.json', 'w') as f:
    json.dump(analysis, f, indent=2)
print("\n✅ Saved to analysis.json")
