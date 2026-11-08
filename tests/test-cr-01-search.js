
const assert = require("node:assert/strict");

const { searchPath } = require("../src/search");

const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: [],
  D: []
};

assert.deepEqual(searchPath(graph, "A", "D"), ["A", "B", "D"]);
assert.equal(searchPath(graph, "A", "Z"), null);
assert.equal(searchPath(graph, "C", "D"), null);

console.log("CR-01 acceptance tests passed!");