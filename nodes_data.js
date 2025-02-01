// Daten für den Graphen (nodes und edges)
const nodesData = [
  { 
    id: 0, 
    label: 'Meine Interessen & Hobbies', 
    group: 'center', 
    description: 'Eine zentrale Übersicht meiner vielfältigen Interessen und Hobbies, die mir Freude, Inspiration und neue Perspektiven eröffnen.' 
  },
  { 
    id: 1, 
    label: 'Outdoor-Aktivitäten', 
    group: 'main', 
    description: 'Erlebnisreiche Aktivitäten in der Natur, die mich mit der Umwelt verbinden und mir neue Energie schenken.' 
  },
  { 
    id: 2, 
    label: 'Medien', 
    group: 'main', 
    description: 'Eine facettenreiche Leidenschaft für Filme, Serien, Spiele und Bücher, die mich immer wieder in andere Welten entführen.' 
  },
  { 
    id: 3, 
    label: '3D', 
    group: 'main', 
    description: 'Eine spannende Reise in die Welt des 3D-Drucks und der 3D-Modellierung, bei der digitale Ideen greifbar werden.' 
  },
  { 
    id: 4, 
    label: 'GIS mit QGIS', 
    group: 'main', 
    description: 'Die Kunst, geografische Daten zu analysieren und in eindrucksvollen visuellen Karten räumliche Zusammenhänge sichtbar zu machen.' 
  },
  { 
    id: 5, 
    label: 'Web Development', 
    group: 'main', 
    description: 'Die kreative Gestaltung und technische Umsetzung interaktiver Web-Erlebnisse, die Nutzer begeistern und überzeugen.' 
  },

  // Outdoor-Aktivitäten
  { 
    id: 101, 
    label: 'Wandern', 
    group: 'sub', 
    title: 'Tagestouren, v.a. Skandinavien', 
    description: 'Ausgedehnte Tagestouren durch die beeindruckende, unberührte Natur Skandinaviens, die mich mit Ruhe und Inspiration erfüllen.' 
  },
  { 
    id: 102, 
    label: 'Radfahren (Gravelbike)', 
    group: 'sub', 
    title: 'Tagesausflüge', 
    description: 'Abenteuerliche Gravelbike-Touren, bei denen ich die Umgebung intensiv erlebe und immer neue Pfade entdecke.' 
  },
  { 
    id: 103, 
    label: 'Kajak', 
    group: 'sub', 
    title: 'Längere Touren in Schweden/Finnland', 
    description: 'Mehrtägige Kajaktouren, die mich über glasklare Seen und majestätische Flüsse Skandinaviens führen – ein echtes Naturerlebnis.' 
  },
  { 
    id: 104, 
    label: 'Skandinavien (Wandern)', 
    group: 'aspect', 
    description: 'Die majestätische, weitläufige Natur Skandinaviens macht das Wandern dort zu einem unvergesslichen Erlebnis.' 
  },
  { 
    id: 105, 
    label: 'GPS-Gerät (Wandern)', 
    group: 'tools', 
    description: 'Ein unverzichtbares Navigationswerkzeug, das mir auf meinen Wanderungen stets den richtigen Weg weist.' 
  },

  // Medien
  { 
    id: 201, 
    label: 'Filme & Serien', 
    group: 'sub', 
    title: 'Breites Spektrum', 
    description: 'Ein vielfältiges Interesse an Filmen und Serien, die unterschiedliche Genres und Geschichten bieten und zum Träumen einladen.' 
  },
  { 
    id: 202, 
    label: 'Mise-en-scène', 
    group: 'aspect', 
    description: 'Eine Leidenschaft für die visuelle Kunst des Filmbildes – von Kameraarbeit über Lichtgestaltung bis hin zum detaillierten Szenenbild.' 
  },
  { 
    id: 203, 
    label: 'Spiele', 
    group: 'sub', 
    title: 'Videospiele & Dungeons and Dragons', 
    description: 'Faszinierende Welten in Videospielen und die kreativen Erzählmöglichkeiten von Dungeons & Dragons eröffnen mir unendliche Abenteuer.' 
  },
  { 
    id: 204, 
    label: 'PC (Gaming)', 
    group: 'tools', 
    description: 'Mein leistungsstarker PC ist die zentrale Plattform für intensive, immersive Gaming-Erlebnisse.' 
  },
  { 
    id: 205, 
    label: 'Steam Deck (Gaming)', 
    group: 'tools', 
    description: 'Das portable Steam Deck bietet mir die Freiheit, Gaming überall zu genießen – sei es unterwegs oder bequem zu Hause.' 
  },
  { 
    id: 206, 
    label: 'Bücher', 
    group: 'sub', 
    title: 'Science-Fiction, Sachbücher', 
    description: 'Eine Leidenschaft für fesselnde Science-Fiction, die zum Nachdenken anregt, und tiefgründige Sachbücher, die mein Wissen erweitern.' 
  },
  { 
    id: 207, 
    label: 'Science-Fiction', 
    group: 'aspect', 
    description: 'Eine unerschütterliche Faszination für visionäre Zukunftskonzepte, technologische Innovationen und alternative Realitäten.' 
  },
  { 
    id: 208, 
    label: 'Sachbücher', 
    group: 'aspect', 
    description: 'Das Streben nach Wissen und neuen Perspektiven, unterstützt durch informative und inspirierende Sachbücher.' 
  },

  // 3D
  { 
    id: 301, 
    label: '3D-Druck', 
    group: 'sub', 
    title: 'Mit Bambu P1P', 
    description: 'Mit meinem Bambu P1P verwandle ich digitale Designs in greifbare Objekte – ein spannender Prozess, der Technik und Kreativität vereint.' 
  },
  { 
    id: 302, 
    label: 'Bambu P1P', 
    group: 'tools', 
    description: 'Mein zuverlässiger 3D-Drucker, der präzise und detailreiche Drucke für meine Projekte ermöglicht.' 
  },
  { 
    id: 303, 
    label: 'Bambu Studio', 
    group: 'tools', 
    description: 'Die Slicing-Software, die ich nutze, um meine 3D-Drucke optimal vorzubereiten und in hochwertige Druckergebnisse zu verwandeln.' 
  },
  { 
    id: 304, 
    label: '3D-Modellierung', 
    group: 'sub', 
    title: 'Mit Fusion 360 & Blender', 
    description: 'Die kreative Welt der 3D-Modellierung, in der ich mit Fusion 360 und Blender komplexe und ästhetische Designs erschaffe.' 
  },
  { 
    id: 305, 
    label: 'Fusion 360', 
    group: 'tools', 
    description: 'Ein leistungsstarkes Tool, mit dem ich präzise Konstruktionen und funktionale Modelle entwerfe.' 
  },
  { 
    id: 306, 
    label: 'Blender', 
    group: 'tools', 
    description: 'Blender bietet mir grenzenlose kreative Freiheit – ideal für organische Formen und künstlerische 3D-Designs.' 
  },

  // GIS mit QGIS
  { 
    id: 401, 
    label: 'Geografische Daten visualisieren', 
    group: 'aspect', 
    description: 'Mit QGIS erforsche ich die komplexen Beziehungen zwischen geografischen Daten und visualisiere beeindruckende räumliche Zusammenhänge.' 
  },

  // Web Development
  { 
    id: 501, 
    label: 'React', 
    group: 'tools', 
    description: 'React ist meine bevorzugte Bibliothek zur Entwicklung dynamischer und interaktiver Benutzeroberflächen im Web.' 
  },
  { 
    id: 502, 
    label: 'Three.js', 
    group: 'tools', 
    description: 'Three.js ermöglicht mir die Erstellung beeindruckender 3D-Grafiken und interaktiver visueller Erlebnisse im Web.' 
  },
  { 
    id: 503, 
    label: 'Projekte umsetzen', 
    group: 'aspect', 
    description: 'Derzeit fokussiere ich mich darauf, meine Fähigkeiten in React und Three.js durch praxisnahe Projekte weiter auszubauen.' 
  },
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
