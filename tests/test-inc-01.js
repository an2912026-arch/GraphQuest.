
const assert = require("node:assert/strict");
const { connectService } = require("../src/config");

const result = connectService({});

assert.equal(result.status, "degraded");
assert.match(result.message, /missing API_URL/);

const success = connectService({
  API_URL: "http://localhost:3000"
});

assert.equal(success.status, "connected");

console.log("INC-01 fixed successfully!");
