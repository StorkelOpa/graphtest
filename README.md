# Interaktiver Wissensgraph

Ein interaktives Visualisierungstool zur Darstellung von Wissensbeziehungen in Form eines dynamischen Graphen. Das Projekt verwendet vis.js für die Graphendarstellung und bietet eine responsive Benutzeroberfläche für Desktop und Mobile Geräte.

## Features

- Interaktiver Wissensgraph mit Knoten und Kanten
- Responsive Design für Desktop und Mobile Nutzung
- Hierarchische Baumstruktur-Navigation
- Detailansicht für ausgewählte Knoten
- Farbkodierte Kategorisierung der Wissensbereiche
- Dynamische Physik-Engine für Knotenpositionierung
- Touch-optimierte Bedienung auf mobilen Geräten

## Technologien

- HTML5
- CSS3
- JavaScript (ES6+)
- [vis.js](https://visjs.org/) für die Graphenvisualisierung

## Installation

1. Klonen Sie das Repository:
```bash
git clone https://github.com/[username]/wissensgraph.git
cd wissensgraph
```

2. Öffnen Sie `index.html` in einem modernen Webbrowser oder hosten Sie die Dateien auf einem Webserver.

## Projekt-Struktur

```
wissensgraph/
├── index.html          # Hauptdatei mit HTML-Struktur
├── nodes_data.js       # Knoten- und Kantendefinitionen
├── README.md          # Projektdokumentation
└── styles/            # CSS-Dateien (optional)
```

## Datenstruktur

### Knoten-Definition

Knoten werden im `nodes_data.js` File definiert:

```javascript
{
  id: "uniqueId",
  label: "Knotenname",
  group: "category",  // 'center', 'main', 'sub', oder 'tools'
  description: "Beschreibung des Knotens"
}
```

### Kanten-Definition

Kanten werden ebenfalls im `nodes_data.js` File definiert:

```javascript
{
  from: "startNodeId",
  to: "endNodeId"
}
```

## Anpassung

### Farben ändern

Die Farbschemata können in den CSS-Variablen angepasst werden:

```css
:root {
    --bg-color: #282a36;
    --text-color: #f8f8f2;
    --accent-color: #6272a4;
    --border-color: #44475a;
    --highlight-color: #ff79c6;
}
```

### Graph-Physik anpassen

Die Physik-Engine-Parameter können in den vis.js Optionen modifiziert werden:

```javascript
physics: {
    barnesHut: {
        gravitationalConstant: -3000,
        centralGravity: 0.3,
        springLength: 150
    }
}
```

## Mobile Optimierung

Das Projekt enthält spezielle CSS-Anpassungen für mobile Geräte:

- Responsive Layout-Anpassung
- Touch-optimierte Interaktionen
- Angepasste Schriftgrößen und Abstände
- Optimierte Scrolling-Erfahrung

## Browser-Kompatibilität

- Chrome (empfohlen)
- Firefox
- Safari
- Edge

Getestet auf iOS und Android Mobile Browsern.

## Performance-Optimierung

Bei großen Datensätzen:
- Reduzieren Sie die Anzahl sichtbarer Kanten
- Passen Sie die Physik-Engine-Parameter an
- Verwenden Sie die eingebauten Zoom-Funktionen

## Bekannte Probleme

- Sehr große Graphen können auf älteren Mobilgeräten zu Performance-Einbußen führen
- Die Physik-Engine benötigt initial einige Sekunden zur Stabilisierung

## Beitragen

1. Fork des Projekts
2. Feature Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request erstellen

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die [LICENSE](LICENSE) Datei für Details.
