// Daten für den Graphen (nodes und edges)
const nodesData = [
    { id: 0, label: 'Zentrales\nThema', group: 'center', size: 30 },
    { id: 1, label: 'Hobby A', group: 'main', size: 25 },
    { id: 2, label: 'Hobby B', group: 'main', size: 25 },
    { id: 3, label: 'Interesse C', group: 'main', size: 25 },
    { id: 4, label: 'Aspekt A1', group: 'sub' },
    { id: 5, label: 'Aspekt A2', group: 'sub' },
    { id: 6, label: 'Tool A1', group: 'tools' },
    { id: 7, label: 'Aspekt B1', group: 'sub' },
    { id: 8, label: 'Aspekt B2', group: 'sub' },
    { id: 9, label: 'Tool B1', group: 'tools' },
    { id: 10, label: 'Tool B2', group: 'tools' },
    { id: 11, label: 'Aspekt C1', group: 'sub' },
    { id: 12, label: 'Aspekt C2', group: 'sub' },
];

const edgesData = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 0, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 4, to: 6 },
    { from: 2, to: 7 },
    { from: 2, to: 8 },
    { from: 7, to: 9 },
    { from: 7, to: 10 },
    { from: 3, to: 11 },
    { from: 3, to: 12 },
];

// Erstelle die vis.DataSet Objekte
const nodes = new vis.DataSet(nodesData);
const edges = new vis.DataSet(edgesData);

// Exportiere die Daten, damit sie in der index.html importiert werden können
export { nodes, edges };
