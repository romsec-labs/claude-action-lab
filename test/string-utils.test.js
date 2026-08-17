const test = require("node:test");
const assert = require("node:assert");
const { capitalize, camelCase, truncate } = require("../string-utils");

test("capitalize", () => {
  assert.strictEqual(capitalize("hello"), "Hello");
  assert.strictEqual(capitalize(""), "");
});

test("camelCase", () => {
  assert.strictEqual(camelCase("hello-world"), "helloWorld");
  assert.strictEqual(camelCase("a b c"), "aBC");
});

test("truncate", () => {
  assert.strictEqual(truncate("hello", 10), "hello");
  assert.strictEqual(truncate("hello world", 5), "hell…");
});
