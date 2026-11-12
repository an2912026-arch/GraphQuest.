// GraphQuest: interactive command-line demonstration.
const readline = require('node:readline');
const { searchPath } = require('./src/search');
const bfs = require('./src/algorithms/bfs');
const dijkstra = require('./src/algorithms/dijkstra');
const graph = { A: {B:4,C:2}, B:{A:4,C:1,D:5}, C:{A:2,B:1,D:8}, D:{B:5,C:8} };
const adjacency = Object.fromEntries(Object.entries(graph).map(([key,edges]) => [key,Object.keys(edges)]));
if (require.main === module) {
  const rl = readline.createInterface({input:process.stdin,output:process.stdout});
  console.log('GRAPHQUEST | Cac diem: A, B, C, D');
  rl.question('Diem bat dau: ', start => rl.question('Diem ket thuc: ', end => {
    start=start.trim().toUpperCase(); end=end.trim().toUpperCase();
    if (!graph[start] || !graph[end]) console.log('Diem khong hop le.');
    else {
      const shortest=dijkstra(graph,start,end);
      const fewest=bfs(graph,start,end);
      console.log('Dijkstra (tong trong so nho nhat):', shortest.path.join(' -> ') || 'Khong co duong', '| chi phi:',shortest.distance);
      console.log('BFS (so canh it nhat):',fewest.path.join(' -> ') || 'Khong co duong');
      console.log('CR-01 search:',(searchPath(adjacency,start,end)||[]).join(' -> ') || 'Khong co duong');
    }
    rl.close();
  }));
}
