# higgscli.com website

Marketing site for [higgs](https://github.com/higgscli/higgs), the agent-first,
local-only CLI for Proton Mail. Static assets served by a Cloudflare Worker
named `higgscli` (account "Akeem Dreams"), custom domains higgscli.com + www.

## Layout

- `public/` is the whole site: `index.html`, `404.html`, `llms.txt`,
  `llms-full.txt`, `robots.txt`, `sitemap.xml`. No server code —
  `wrangler.jsonc` is assets-only.
- Deploy: `npm run deploy`. After deploying, the apex can serve a stale
  edge-cached copy for a minute or two — verify with `curl` before assuming a
  deploy failed.
- DataFast analytics: website id `dfid_XvCsB2MzUSfFjv6y31NmM`. Goals
  `visit_github` (any github.com link) and `visit_akeemjenkins`
  (akeemjenkins.com link) fire from the click listener at the bottom of
  `index.html`. Manage with the `datafast` CLI.

## Copy rules

- The copy leads with security, privacy, and local-first AI — Proton Mail
  users chose end-to-end encryption on purpose. Keep that framing first;
  the agent contract is the second act.
- Product facts come from the higgs repo (`higgs schema`, README, CHANGELOG).
  Never describe flags or commands the CLI doesn't report.
- Keep `index.html`, `llms.txt`, and `llms-full.txt` telling the same story —
  agents read the text files, humans read the page.
- Keep the Proton AG trademark disclaimer intact (footer + llms files).

## Release checklist (when a new higgs version ships)

1. Version in the hero eyebrow and the Download button (`index.html`)
2. `softwareVersion` in the JSON-LD block (`index.html`)
3. Version line in `llms-full.txt`
4. `<lastmod>` dates in `sitemap.xml`
5. `npm run deploy`, verify live, commit and push

## Rules

- **After every push to main: check the README and update it in the same
  sitting.** A push is not done until the README is verified current.
- No GitHub PATs for automation — use a GitHub App with short-lived
  installation tokens (`actions/create-github-app-token`).
