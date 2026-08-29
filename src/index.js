// Worker in front of the static assets, solely to record AI-crawler hits
// (ClaudeBot, GPTBot, Googlebot, …) in DataFast's Bot traffic card.
// The wrapper filters non-crawler traffic locally and reports crawler hits
// via ctx.waitUntil, so human requests never wait on datafa.st.
// Requires @datafast/ai-crawl >= 1.0.8 — 1.0.7 loses waitUntil on workerd
// and silently drops every event.
import { withAICrawlerTracking } from "@datafast/ai-crawl";

export default {
  fetch: withAICrawlerTracking(
    (request, env, ctx) => env.ASSETS.fetch(request),
    { websiteId: "dfid_XvCsB2MzUSfFjv6y31NmM" },
  ),
};
