// Daten für den Graphen (nodes und edges)
const nodes = [
    { id: 0, label: 'Zentral', description: 'Meine Interessen konzentrieren sich hauptsächlich auf den digitalen Bereich und umfassen eine breite Palette von Medien, wobei das Buch die primäre Ausnahme im Analogen darstellt. Der Ursprung dieser Interessen liegt in der Begeisterung für Computerspiele und Dokumentationen in meiner Jugend. Strategie-Spiele wie die Total War Reihe, mit ihren Weltkarten und der Planung von Städten, weckten früh mein Interesse an Stadtplanung und GIS.' },
    { id: 1, label: 'Outdoor', description: 'Das "Draußen sein" dient mir als wichtiger Ausgleich zur intensiven Bildschirmarbeit. Aufgewachsen in einer ländlichen Region, verbrachte ich viel Zeit in der Natur, bevor die digitale Welt mich in ihren Bann zog. Das Bauen von Hütten im Wald und das Erkunden der Umgebung mit Geschwistern und Freunden prägten diese Zeit.' },
    { id: 2, label: 'Medien', description: 'Meine Faszination für Medien liegt vor allem in der Art und Weise, wie sie Wissen aufbereiten und weitergeben. Jeder Mensch hat einen individuellen Mediengeschmack, der durch die Sozialisation geprägt ist, und einen eigenen Umgang damit, der oft Einblicke in die Medienkompetenz gibt. Besonders interessant finde ich die Selbstreflexion über meinen eigenen Medienkonsum und die Analyse, warum mich ein bestimmtes Spiel, ein Film oder eine Serie begeistert.' },
    { id: 3, label: '3D', description: '3D-Technologien begeistern mich, besonders in Kombination mit 3D-Druck, da sie eine fantastische Möglichkeit bieten, das Digitale in die reale Welt zu überführen. Die dreidimensionale Darstellung von Informationen ist für mich oft effektiver und ermöglicht eine spannendere Inszenierung von beispielsweise Karten oder anderen komplexen Daten.' },
    { id: 4, label: 'GIS', description: 'GIS sehe ich als einen Weg, die Realität präzise in den digitalen Raum zu übertragen – quasi das Gegenstück zum 3D-Druck. Es ermöglicht, Informationen, die in der realen Welt schwer zu erfassen sind, verständlich und analysierbar zu machen.' },
    { id: 5, label: 'WebDev', description: 'Web Development ist für mich eine persönliche Herausforderung. Ich habe festgestellt, dass ich zwar vielfältige Interessen habe, aber mir ein effektiver Weg fehlt, diese zu teilen. Daher möchte ich lernen, wie man Informationen von Grund auf im Internet zugänglich macht.' },

    // Outdoor
    { id: 101, label: 'Wandern', description: 'Meistens unternehme ich Tagestouren, wobei Skandinavien ein bevorzugtes Ziel ist. Der Ausgleich zur digitalen Arbeit und das Erleben der skandinavischen Natur stehen hier im Vordergrund.' },
    { id: 102, label: 'Rad', description: 'Mit meinem Gravelbike mache ich ebenfalls meistens Tagesausflüge. Es dient als willkommene Abwechslung und ermöglicht es mir, aktiv die Umgebung zu erkunden.' },
    { id: 103, label: 'Kajak', description: 'Längere Kajaktouren in Schweden oder Finnland sind für mich besondere Erlebnisse, die intensive Naturerfahrungen ermöglichen.' },
    { id: 104, label: 'Skandinavien', description: 'Die Weite, die unberührte Natur und die Ruhe der skandinavischen Landschaften ziehen mich beim Wandern besonders an.' },
    { id: 105, label: 'GPS', description: 'Ein GPS-Gerät ist beim Wandern ein unverzichtbares Hilfsmittel zur Navigation und Orientierung, besonders in den weitläufigen Gebieten Skandinaviens.' },

    // Medien
    { id: 201, label: 'Filme/Serien', description: 'Mein Geschmack bei Filmen und Serien ist breit gefächert. Aktuell begeistern mich vor allem die Serie "Severance" und obskure Dokumentationen wie "Grizzly Man" oder "Tickled".' },
    { id: 202, label: 'Mise-en-scène', description: 'Bei Filmen und Serien interessieren mich besonders die Aspekte der Mise-en-scène, also die bewusste Gestaltung von Bildkomposition, Kameraarbeit, Lichtsetzung, Szenenbild und Kostümen.' },
    { id: 203, label: 'Spiele', description: 'Videospiele sind für mich eine herausragende Methode, um Geschichten interaktiv zu erleben, vorausgesetzt, man investiert die nötige Zeit. Zudem spiele ich gerne Dungeons & Dragons.' },
    { id: 204, label: 'PC', description: 'Auf dem PC spiele ich vor allem komplexe Strategiespiele wie "Stellaris", die eine präzise Steuerung mit Maus und Tastatur erfordern.' },
    { id: 205, label: 'Steam Deck', description: 'Das Steam Deck ermöglicht es mir, PC-Spiele bequem mit Controller auf dem Sofa oder unterwegs zu spielen, oft durch Streaming vom PC.' },
    { id: 206, label: 'Bücher', description: 'Bücher bieten mir eine analoge Möglichkeit, in andere Welten einzutauchen und Wissen zu erlangen.' },
    { id: 207, label: 'Sci-Fi', description: 'Im Bereich Science-Fiction hat mich zuletzt "The Three-Body Problem" von Cixin Liu sehr beeindruckt. Die Trilogie erkundet auf faszinierende Weise Themen wie den Erstkontakt mit außerirdischem Leben, die Auswirkungen wissenschaftlicher Entdeckungen auf die Menschheit und die großen Fragen des Universums.' },
    { id: 208, label: 'Sachbuch', description: 'Sachbücher wie "The Selfish Gene" von Richard Dawkins begeistern mich, da sie komplexe wissenschaftliche Ideen verständlich vermitteln und neue Perspektiven aufzeigen. Dawkins' Werk über die Evolutionstheorie, betrachtet aus der Perspektive der Gene, hat mein Verständnis von Biologie und den Triebkräften des Lebens nachhaltig geprägt. Ebenfalls beeindruckend fand ich "Homo Deus" von Yuval Noah Harari, das sich mit den Zukunftsaussichten der Menschheit angesichts technologischer Fortschritte auseinandersetzt.' },

    // 3D
    { id: 301, label: '3D-Druck', description: 'Mit meinem Bambu P1P drucke ich hauptsächlich Gegenstände für den täglichen Gebrauch. Durch mein aktuelles Studium der Stadtplanung ergeben sich nun auch neue Anwendungsfelder für den 3D-Druck, beispielsweise im Modellbau.' },
    { id: 302, label: 'P1P', description: 'Der Bambu P1P ist mein 3D-Drucker, mit dem ich physische Objekte auf Basis digitaler Modelle herstelle.' },
    { id: 303, label: 'Bambu Studio', description: 'Bambu Studio ist die Slicing-Software, die ich verwende, um meine 3D-Modelle für den Druck vorzubereiten.' },
    { id: 304, label: 'Modellierung', description: 'Ich betreibe 3D-Modellierung sowohl mit Fusion 360 als auch mit Blender, wobei ich die Software je nach Anwendungsfall auswähle.' },
    { id: 305, label: 'Fusion 360', description: 'Fusion 360 nutze ich primär für die Konstruktion von funktionalen Teilen und präzisen Modellen, die oft für den 3D-Druck bestimmt sind.' },
    { id: 306, label: 'Blender', description: 'Blender kommt bei mir zum Einsatz, wenn es um die Erstellung von ästhetisch ansprechenden Modellen geht, die primär im digitalen Raum verbleiben sollen, oder für komplexere organische Formen.' },

    // GIS
    { id: 401, label: 'Geodatenanalyse', description: 'Mein erstes größeres GIS-Projekt war die Kartierung von Aneignungen im öffentlichen Raum, bei der ich das Vorkommen von Stickern und Graffiti dokumentiert und analysiert habe, um Muster und Netzwerke sichtbar zu machen.' },

    // WebDev
    { id: 501, label: 'React', description: 'React ist eine JavaScript-Bibliothek, die ich aktuell lerne, um interaktive Benutzeroberflächen für Webanwendungen zu entwickeln.' },
    { id: 502, label: 'Three.js', description: 'Three.js fasziniert mich, da diese Bibliothek es ermöglicht, beeindruckende 3D-Grafiken direkt im Webbrowser zu erstellen und zu visualisieren.' },
    { id: 503, label: 'Projekte', description: 'Um meine Fähigkeiten in React und Three.js zu verbessern, arbeite ich aktiv an verschiedenen Projekten, um das Gelernte praktisch anzuwenden und zu festigen.' },
];

const edges = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 0, to: 3 },
    { from: 0, to: 4 },
    { from: 0, to: 5 },

    // Outdoor
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

    // GIS
    { from: 4, to: 401 },

    // WebDev
    { from: 5, to: 501 },
    { from: 5, to: 502 },
    { from: 5, to: 503 },
];

// Exportiere die Daten, damit sie in der index.html importiert werden können
export const nodes = nodesData;
export const edges = edgesData;
