
function bfs(graph, start, end) {
    const queue = [[start]];
    const visited = new Set([start]);

    while (queue.length > 0) {
        const path = queue.shift();
        const current = path[path.length - 1];

        if (current === end) {
            return {
                path: path,
                distance: path.length - 1
            };
        }

        const neighbors = Object.keys(graph[current] || {});

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }

    return {
        path: [],
        distance: Infinity
    };
}

module.exports = bfs;
