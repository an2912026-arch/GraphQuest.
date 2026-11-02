
function dijkstra(graph, start, end) {
    const distances = {};
    const previous = {};
    const unvisited = new Set(Object.keys(graph));

    for (const node of unvisited) {
        distances[node] = Infinity;
        previous[node] = null;
    }

    distances[start] = 0;

    while (unvisited.size > 0) {
        let current = null;

        for (const node of unvisited) {
            if (
                current === null ||
                distances[node] < distances[current]
            ) {
                current = node;
            }
        }

        if (current === null || distances[current] === Infinity) {
            break;
        }

        if (current === end) {
            break;
        }

        unvisited.delete(current);

        for (const neighbor in graph[current]) {
            if (!unvisited.has(neighbor)) continue;

            const newDistance =
                distances[current] + graph[current][neighbor];

            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                previous[neighbor] = current;
            }
        }
    }

    if (distances[end] === Infinity) {
        return { path: [], distance: Infinity };
    }

    const path = [];
    let current = end;

    while (current !== null) {
        path.unshift(current);
        current = previous[current];
    }

    return {
        path,
        distance: distances[end]
    };
}

module.exports = dijkstra;
