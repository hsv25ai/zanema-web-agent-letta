import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve('dist');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const ids=['home','about','services','values','markets','our-work','safety-quality','contact','privacy'];
assert.equal((html.match(/<h1\b/g)||[]).length,1,'homepage needs exactly one h1');
assert.match(html,/<html[^>]*lang="en-US"/,'site language');
assert.match(html,/<meta name="description" content="[^"]+"/,'description metadata');
for(const id of ids)assert.ok(html.includes(`id="${id}"`),`missing scroll section #${id}`);
assert.ok(html.includes('fiber-installation.webp'),'hero field photo');
assert.equal((html.match(/class="capability"/g)||[]).length,4,'four visible capabilities');
assert.ok(!html.includes('signal-art'),'no abstract signal placeholders');
const allIds=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
for(const [,hash] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(allIds.has(hash),`broken anchor #${hash}`);
assert.ok(!html.includes('Reference photography'), 'old stock reference must be replaced');
assert.ok(!html.includes('href="/zanema-web-agent-letta/services/'),'no secondary marketing pages');
assert.ok(!html.includes('href="/zanema-web-agent-letta/contact/'),'contact must be same-page anchor');
assert.ok(!html.includes('service question'), 'all sections are one-scroll');
assert.ok(!html.includes('Reference photography'),'no generic stock placeholders');
assert.ok(html.includes('Public domain'),'photo attribution visible');
for(const [,value] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
 if(value.startsWith('http')||value.startsWith('#')||value.startsWith('mailto:')||value.startsWith('tel:')||value.startsWith('data:'))continue;
 assert.ok(value.startsWith('/zanema-web-agent-letta/'),`base-aware asset: ${value}`);
 const rel=decodeURIComponent(new URL(value,'https://example.com').pathname.replace('/zanema-web-agent-letta/',''));
 const file=path.join(root,rel);assert.ok(fs.existsSync(file),`missing asset: ${value}`);
 if(/\.svg$/.test(file)) assert.ok(fs.readFileSync(file,'utf8').includes('<svg'),`invalid SVG: ${value}`);
}
console.log(`PASS: one page, ${ids.length} scroll sections, one H1, language/SEO and local asset checks.`);
