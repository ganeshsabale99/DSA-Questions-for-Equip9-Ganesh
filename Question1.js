let = n = 5
let = edges = [(1, 2), (2, 3), (3, 4), (4, 5)]
let = availability = {1: ["excavator"], 2: [], 3: ["bulldozer"], 4: ["excavator"], 5: ["crane"]}
let = start_provider = 2
let = target_equipment = "excavator"


function shortestPath(n, edges, availability, start_provider, target_equipment) {
    const graph = {};
    for (let i = 1; i <= n; i++) {
        graph[i] = [];
    }
    console.log(graph);
    console.log(edges);
    for (let edge of edges) {
        graph[edge[0]].push(edge[1]);
        graph[edge[1]].push(edge[0]);
    }
    const queue = [[start_provider, 0]];
    const visited = new Set();
    while (queue.length > 0) {
        const [provider, distance] = queue.shift();
        if (visited.has(provider)) {
            continue;
        }
        visited.add(provider);
        if (availability[provider].includes(target_equipment)) {
            return distance;
        }
        for (let neighbor of graph[provider]) {
            queue.push([neighbor, distance + 1]);
        }
    }
    return -1;
}

console.log(shortestPath(n, edges, availability, start_provider, target_equipment));