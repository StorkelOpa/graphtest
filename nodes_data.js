// Daten für den Graphen (nodes und edges)
const nodesData = [
    { id: 0, label: 'Meine Interessen & Hobbies', group: 'center', size: 30 },
    { id: 1, label: 'Outdoor-Aktivitäten', group: 'main', size: 25 },
    { id: 2, label: 'Medien', group: 'main', size: 25 },
    { id: 3, label: '3D', group: 'main', size: 25 },
    { id: 4, label: 'GIS mit QGIS', group: 'main', size: 25 },
    { id: 5, label: 'Web Development', group: 'main', size: 25 },

    // Outdoor-Aktivitäten
    { id: 101, label: 'Wandern', group: 'sub', title: 'Tagestouren, v.a. Skandinavien' },
    { id: 102, label: 'Radfahren (Gravelbike)', group: 'sub', title: 'Tagesausflüge' },
    { id: 103, label: 'Kajak', group: 'sub', title: 'Längere Touren in Schweden/Finnland' },
    { id: 104, label: 'Skandinavien (Wandern)', group: 'aspect', title: 'Bevorzugtes Ziel beim Wandern' },
    { id: 105, label: 'GPS-Gerät (Wandern)', group: 'tools', title: 'Navigation beim Wandern' },

    // Medien
    { id: 201, label: 'Filme & Serien', group: 'sub', title: 'Breites Spektrum' },
    { id: 202, label: 'Mise-en-scène', group: 'aspect', title: 'Interessanter Aspekt bei Filmen' },
    { id: 203, label: 'Spiele', group: 'sub', title: 'Videospiele & Dungeons and Dragons' },
    { id: 204, label: 'PC (Gaming)', group: 'tools', title: 'Plattform für Videospiele' },
    { id: 205, label: 'Steam Deck (Gaming)', group: 'tools', title: 'Mobile Gaming-Plattform' },
    { id: 206, label: 'Bücher', group: 'sub', title: 'Science-Fiction, Sachbücher' },
    { id: 207, label: 'Science-Fiction', group: 'aspect', title: 'Bevorzugtes Genre' },
    { id: 208, label: 'Sachbücher', group: 'aspect', title: 'Weiteres bevorzugtes Genre' },

    // 3D
    { id: 301, label: '3D-Druck', group: 'sub', title: 'Mit Bambu P1P' },
    { id: 302, label: 'Bambu P1P', group: 'tools', title: 'Verwendeter 3D-Drucker' },
    { id: 303, label: 'Bambu Studio', group: 'tools', title: 'Slicing Software' },
    { id: 304, label: '3D-Modellierung', group: 'sub', title: 'Mit Fusion 360 & Blender' },
    { id: 305, label: 'Fusion 360', group: 'tools', title: 'CAD Software für Modellierung' },
    { id: 306, label: 'Blender', group: 'tools', title: 'Weitere 3D-Modellierungssoftware' },

    // GIS mit QGIS
    { id: 401, label: 'Geografische Daten in Bezug setzen & Netzwerke bilden', group: 'aspect', title: 'Hauptinteresse bei QGIS' },

    // Web Development
    { id: 501, label: 'React', group: 'tools', title: 'JavaScript Bibliothek' },
    { id: 502, label: 'Three.js', group: 'tools', title: '3D Grafikbibliothek für Web' },
    { id: 503, label: 'Projekte umsetzen', group: 'aspect', title: 'Aktueller Fokus im Web Development' },
];

const edgesData = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 0, to: 3 },
    { from: 0, to: 4 },
    { from: 0, to: 5 },

    // Outdoor-Aktivitäten
    { from: 1, to: 101 },
    { from: 1, to: 102 },
    { from: 1, to: 103 },
    { from: 101, to: 104 },
    { from: 101, to: 105 },

    // Medien
    { from: 2, to: 201 },
    { from: 201, to: 202 },
    { from: 2, to: 203 },
    { from: 203, to: 204 },
    { from: 203, to: 205 },
    { from: 2, to: 206 },
    { from: 206, to: 207 },
    { from: 206, to: 208 },

    // 3D
    { from: 3, to: 301 },
    { from: 301, to: 302 },
    { from: 301, to: 303 },
    { from: 3, to: 304 },
    { from: 304, to: 305 },
    { from: 304, to: 306 },

    // GIS mit QGIS
    { from: 4, to: 401 },

    // Web Development
    { from: 5, to: 501 },
    { from: 5, to: 502 },
    { from: 5, to: 503 },
];

// Exportiere die Daten, damit sie in der index.html importiert werden können
export const nodes = nodesData;
export const edges = edgesData;
