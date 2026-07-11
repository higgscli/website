# higgscli.com

Marketing site for [**higgs**](https://github.com/higgscli/higgs), an agent-first
CLI for Proton Mail.

A single static page (`public/index.html`) served by a Cloudflare Worker named
`higgscli` using [static assets](https://developers.cloudflare.com/workers/static-assets/) —
no server code. Agent discoverability comes from static files (`/llms.txt`,
`/llms-full.txt`, `/robots.txt`, `/sitemap.xml`) plus JSON-LD and
`<link rel="alternate">` tags in the page head. The Worker serves both
`higgscli.com` and `www.higgscli.com` as custom domains.

## Develop

```sh
npm install
npm run dev      # local preview at http://localhost:8787
```

## Deploy

```sh
npm run deploy   # wrangler deploy
```

## Updating for a release

When a new higgs version ships, update:

- the version in the hero eyebrow and the "Download" button in `public/index.html`
- `softwareVersion` in the JSON-LD block in `public/index.html`
- the version line in `public/llms-full.txt`
- `<lastmod>` dates in `public/sitemap.xml`
