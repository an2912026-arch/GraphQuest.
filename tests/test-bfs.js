
const bfs = require("../src/algorithms/bfs");

const graph = {
    A: { B: 1, C: 1 },
    B: { A: 1, D: 1 },
    C: { A: 1, D: 1 },
    D: { B: 1, C: 1 }
};

const result = bfs(graph, "A", "D");

console.log("===== GRAPH QUEST BFS =====");
console.log("Diem bat dau: A");
console.log("Diem ket thuc: D");
console.log("Duong di ngan nhat:", result.path.join(" -> "));
console.log("So canh:", result.distance);

if (
    result.distance === 2 &&
    result.path[0] === "A" &&
    result.path[result.path.length - 1] === "D"
) {
    console.log("KET QUA: TEST THANH CONG!");
} else {
    console.log("KET QUA: TEST THAT BAI!");
}
