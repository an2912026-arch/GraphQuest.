
function searchPath(graph, start, end) {
  if (!graph || !Object.prototype.hasOwnProperty.call(graph, start) ||
      !Object.prototype.hasOwnProperty.call(graph, end)) {
    return null;
  }

  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    if (current === end) return path;

    for (const next of graph[current] || []) {
      if (!visited.has(next) &&
          Object.prototype.hasOwnProperty.call(graph, next)) {
        visited.add(next);
        queue.push([...path, next]);
      }
    }
  }

  return null;
}

module.exports = { searchPath };
