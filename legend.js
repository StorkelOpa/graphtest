// legend.js
import { options } from './options.js';

// Eine Hilfsfunktion, um die Gruppennamen in lesbare Labels umzuwandeln
const groupLabels = {
  center: 'Zentral',
  main: 'Hauptinteressen',
  sub: 'Unterpunkte',
  aspect: 'Aspekt',
  tools: 'Tools'
};

export function generateLegend() {
  const legendContainer = document.getElementById('legend');
  if (!legendContainer) return;

  // Leere ggf. vorhandene Inhalte
  legendContainer.innerHTML = '';

  // Iteriere über alle Gruppen aus options.groups
  Object.entries(options.groups).forEach(([groupKey, groupData]) => {
    // Erstelle ein Legendenelement
    const legendItem = document.createElement('div');
    legendItem.classList.add('legend-item');

    // Erstelle das Farbfeld
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('legend-color');
    colorDiv.style.backgroundColor = groupData.color.background;
    colorDiv.style.border = `2px solid ${groupData.color.border}`;

    // Erstelle den Text (verwende eine Mapping-Tabelle für lesbare Namen)
    const labelText = document.createElement('span');
    labelText.textContent = groupLabels[groupKey] || groupKey;

    // Füge Farbfeld und Text dem Legendenelement hinzu
    legendItem.appendChild(colorDiv);
    legendItem.appendChild(labelText);

    // Hänge das Legendenelement an den Container
    legendContainer.appendChild(legendItem);
  });
}
