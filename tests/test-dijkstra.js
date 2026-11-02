
const dijkstra = require("../src/algorithms/dijkstra");

// Tạo bản đồ đồ thị mẫu
const graph = {
    A: { B: 4, C: 2 },
    B: { A: 4, C: 1, D: 5 },
    C: { A: 2, B: 1, D: 8 },
    D: { B: 5, C: 8 }
};

// Tìm đường đi ngắn nhất từ A đến D
const result = dijkstra(graph, "A", "D");

console.log("===== GRAPH QUEST =====");
console.log("Diem bat dau: A");
console.log("Diem ket thuc: D");
console.log("Duong di ngan nhat:", result.path.join(" -> "));
console.log("Tong trong so:", result.distance);

// Kiểm tra kết quả
if (
    result.distance === 8 &&
    result.path.join(" -> ") === "A -> C -> B -> D"
) {
    console.log("KET QUA: TEST THANH CONG!");
} else {
    console.log("KET QUA: TEST THAT BAI!");
}
