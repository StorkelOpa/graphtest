// Daten für den Graphen (nodes und edges)
const nodesData = [
    { id: 0, label: 'Meine Interessen & Hobbies', group: 'center', description: 'Übersicht meiner verschiedenen Interessen und Hobbies, die mich begeistern.' },
    { id: 1, label: 'Outdoor-Aktivitäten', group: 'main', description: 'Aktivitäten in der Natur, die mir Freude bereiten und mich erden.' },
    { id: 2, label: 'Medien', group: 'main', description: 'Meine Leidenschaft für Filme, Spiele und Bücher in all ihren Facetten.' },
    { id: 3, label: '3D', group: 'main', description: 'Die faszinierende Welt des 3D-Drucks und der 3D-Modellierung.' },
    { id: 4, label: 'GIS mit QGIS', group: 'main', description: 'Die Möglichkeit, geografische Daten zu analysieren und visuell darzustellen.' },
    { id: 5, label: 'Web Development', group: 'main', description: 'Das Erstellen und Gestalten von interaktiven Erlebnissen im Web.' },

    // Outdoor-Aktivitäten
    { id: 101, label: 'Wandern', group: 'sub', title: 'Tagestouren, v.a. Skandinavien', description: 'Bevorzugt Tagestouren, insbesondere in der beeindruckenden Landschaft Skandinaviens.' },
    { id: 102, label: 'Radfahren (Gravelbike)', group: 'sub', title: 'Tagesausflüge', description: 'Mit dem Gravelbike die Umgebung erkunden, meist auf Tagesausflügen.' },
    { id: 103, label: 'Kajak', group: 'sub', title: 'Längere Touren in Schweden/Finnland', description: 'Mehrtägige Kajaktouren in den weitläufigen Seen und Flüssen Schwedens und Finnlands.' },
    { id: 104, label: 'Skandinavien (Wandern)', group: 'aspect', description: 'Die unberührte Natur und Weite Skandinaviens machen das Wandern dort besonders reizvoll.' },
    { id: 105, label: 'GPS-Gerät (Wandern)', group: 'tools', description: 'Ein wichtiges Hilfsmittel zur Navigation bei meinen Wanderungen.' },

    // Medien
    { id: 201, label: 'Filme & Serien', group: 'sub', title: 'Breites Spektrum', description: 'Ein großes Interesse an Filmen und Serien verschiedenster Genres.' },
    { id: 202, label: 'Mise-en-scène', group: 'aspect', description: 'Besonderes Augenmerk auf die Gestaltung des Filmbildes, inklusive Kameraarbeit, Licht und Szenenbild.' },
    { id: 203, label: 'Spiele', group: 'sub', title: 'Videospiele & Dungeons and Dragons', description: 'Begeisterung für immersive Videospiele und die kreativen Möglichkeiten von Dungeons & Dragons.' },
    { id: 204, label: 'PC (Gaming)', group: 'tools', description: 'Die Hauptplattform für meine Videospielerlebnisse.' },
    { id: 205, label: 'Steam Deck (Gaming)', group: 'tools', description: 'Die Flexibilität des Steam Decks ermöglicht entspanntes Spielen unterwegs oder am Fernseher.' },
    { id: 206, label: 'Bücher', group: 'sub', title: 'Science-Fiction, Sachbücher', description: 'Eine Vorliebe für Science-Fiction-Literatur, die zum Nachdenken anregt, und informative Sachbücher.' },
    { id: 207, label: 'Science-Fiction', group: 'aspect', description: 'Faszination für Zukunftsvisionen, technologische Konzepte und alternative Welten.' },
    { id: 208, label: 'Sachbücher', group: 'aspect', description: 'Interesse an der Erweiterung des Wissens und dem Kennenlernen neuer Perspektiven.' },

    // 3D
    { id: 301, label: '3D-Druck', group: 'sub', title: 'Mit Bambu P1P', description: 'Der 3D-Druck ermöglicht es mir, digitale Designs in die Realität umzusetzen, hauptsächlich mit meinem Bambu P1P.' },
    { id: 302, label: 'Bambu P1P', group: 'tools', description: 'Mein zuverlässiger 3D-Drucker für diverse Projekte.' },
    { id: 303, label: 'Bambu Studio', group: 'tools', description: 'Die Slicing-Software, die ich für die Vorbereitung meiner 3D-Drucke nutze.' },
    { id: 304, label: '3D-Modellierung', group: 'sub', title: 'Mit Fusion 360 & Blender', description: 'Das Erstellen von 3D-Modellen mit den vielseitigen Programmen Fusion 360 und Blender.' },
    { id: 305, label: 'Fusion 360', group: 'tools', description: 'Nutze ich gerne für präzise Konstruktionen und funktionale Modelle.' },
    { id: 306, label: 'Blender', group: 'tools', description: 'Eignet sich hervorragend für organische Formen und kreative Designs.' },

    // GIS mit QGIS
    { id: 401, label: 'Geografische Daten in Bezug setzen & Netzwerke bilden', group: 'aspect', description: 'Das Hauptinteresse an QGIS liegt darin, Beziehungen zwischen geografischen Daten herzustellen und räumliche Zusammenhänge zu visualisieren.' },

    // Web Development
    { id: 501, label: 'React', group: 'tools', description: 'Eine moderne JavaScript-Bibliothek, die ich für die Entwicklung interaktiver Benutzeroberflächen lerne.' },
    { id: 502, label: 'Three.js', group: 'tools', description: 'Faszinierende JavaScript-Bibliothek zur Erstellung und Darstellung von 3D-Grafiken im Web.' },
    { id: 503, label: 'Projekte umsetzen', group: 'aspect', description: 'Mein aktueller Fokus liegt darauf, meine Kenntnisse in React und Three.js durch praktische Projekte zu vertiefen.' },
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
