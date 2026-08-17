// String utilities for internal tooling.
"use strict";

function capitalize(s) {
  if (typeof s !== "string" || s.length === 0) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function camelCase(s) {
  return String(s)
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^(.)/, (c) => c.toLowerCase());
}

function truncate(s, n) {
  s = String(s);
  if (s.length <= n) return s;
  return s.slice(0, Math.max(0, n - 1)) + "…";
}

module.exports = { capitalize, camelCase, truncate };
