/**
 * Logger-category catalogue for the ediabasx subsystem.
 *
 * Consumer apps (ediabasx-web Settings dialog, inpax-web Settings,
 * future ncsx-web) iterate this array to build per-category controls
 * without hardcoding category names. Hints surface as tooltips /
 * sublabels.
 *
 * Add an entry here whenever a new `getLogger("EDIABASX.*")` call site
 * lands that's worth exposing to end users. Internal-only categories
 * (test fixtures, dev scripts) stay out — they'd just clutter the
 * Settings UI.
 *
 * The hint must be one sentence; longer copy belongs in docs.
 */

import type { LogCategory } from "@emdzej/bimmerz-logger";

export const LOG_CATEGORIES: readonly LogCategory[] = [
  {
    name: "EDIABASX",
    hint: "Catch-all for the ediabasx subsystem — overrides any unmatched subtree below.",
  },
  {
    name: "EDIABASX.ediabas",
    hint: "SGBD load / variant resolve / job dispatch lifecycle.",
  },
  {
    name: "EDIABASX.ediabas.config-loader",
    hint: "Per-config-file load events (createFromConfigFile, loadConfig).",
  },
  {
    name: "EDIABASX.ediabas.wire",
    hint: "Reserved — raw send / recv / xsend bytes (populated by future interface-side migration).",
  },
];
