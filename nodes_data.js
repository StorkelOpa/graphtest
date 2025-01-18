// Daten für den Graphen (nodes und edges)
const nodesData = [
    { id: 0, label: 'Zentrales\nThema', group: 'center', size: 30 },
    { id: 1, label: 'Hobby A', group: 'main', size: 25 },
    { id: 2, label: 'Hobby B', group: 'main', size: 25 },
    { id: 3, label: 'Interesse C', group: 'main', size: 25 },
    { id: 4, label: 'Aspekt A1', group: 'sub', title: 'Details zu Aspekt A1' },
    { id: 5, label: 'Aspekt A2', group: 'sub', title: 'Weitere Details zu Aspekt A2' },
    { id: 6, label: 'Tool A1', group: 'tools', title: 'Nützliches Tool für Aspekt A1' },
    { id: 7, label: 'Aspekt B1', group: 'sub', title: 'Wichtiger Aspekt von Hobby B' },
    { id: 8, label: 'Aspekt B2', group: 'sub', title: 'Ein weiterer Aspekt von Hobby B' },
    { id: 9, label: 'Tool B1', group: 'tools', title: 'Hilfreiches Tool für Hobby B' },
    { id: 10, label: 'Tool B2', group: 'tools', title: 'Ein anderes Tool für Hobby B' },
    { id: 11, label: 'Aspekt C1', group: 'sub', title: 'Erster Aspekt von Interesse C' },
    { id: 12, label: 'Aspekt C2', group: 'sub', title: 'Zweiter Aspekt von Interesse C' },
    { id: 13, label: 'Tool C1', group: 'tools', title: 'Tool, das bei Interesse C hilft' },
    { id: 14, label: 'Tool C2', group: 'tools', title: 'Ein weiteres nützliches Tool für Interesse C' },
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
    { from: 11, to: 13 },
    { from: 11, to: 14 },
];

// Exportiere die Daten, damit sie in der index.html importiert werden können
export const nodes = nodesData;
export const edges = edgesData;
