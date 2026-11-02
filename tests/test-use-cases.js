const assert = require("assert");

const dijkstra = require("../src/algorithms/dijkstra");
const bfs = require("../src/algorithms/bfs");

// TEST 1: Tìm đường đi ngắn nhất bằng Dijkstra
const weightedGraph = {
    A: { B: 4, C: 2 },
    B: { A: 4, C: 1, D: 5 },
    C: { A: 2, B: 1, D: 8 },
    D: { B: 5, C: 8 }
};

const dijkstraResult = dijkstra(weightedGraph, "A", "D");

assert.deepStrictEqual(dijkstraResult.path, ["A", "C", "B", "D"]);
assert.strictEqual(dijkstraResult.distance, 8);

console.log("PASS: Dijkstra tìm được đường đi ngắn nhất");

// TEST 2: Không tồn tại đường đi
const disconnectedGraph = {
    A: { B: 2 },
    B: { A: 2 },
    C: { D: 3 },
    D: { C: 3 }
};

const dijkstraNoPath = dijkstra(disconnectedGraph, "A", "D");
const bfsNoPath = bfs(disconnectedGraph, "A", "D");

assert.deepStrictEqual(dijkstraNoPath.path, []);
assert.strictEqual(dijkstraNoPath.distance, Infinity);

assert.deepStrictEqual(bfsNoPath.path, []);
assert.strictEqual(bfsNoPath.distance, Infinity);

console.log("PASS: Xử lý khi không tồn tại đường đi");

// TEST 3: Điểm bắt đầu trùng điểm kết thúc
const dijkstraSamePoint = dijkstra(weightedGraph, "A", "A");
const bfsSamePoint = bfs(weightedGraph, "A", "A");

assert.deepStrictEqual(dijkstraSamePoint.path, ["A"]);
assert.strictEqual(dijkstraSamePoint.distance, 0);

assert.deepStrictEqual(bfsSamePoint.path, ["A"]);
assert.strictEqual(bfsSamePoint.distance, 0);

console.log("PASS: Điểm bắt đầu và kết thúc giống nhau");

console.log("\nTất cả 3 trường hợp kiểm thử đều thành công!");