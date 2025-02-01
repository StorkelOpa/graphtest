// options.js
export const options = {
  nodes: {
    shape: 'dot',
    scaling: {
      min: 10,
      max: 25,
      label: {
        enabled: true,
        min: 10,
        max: 20,
        maxVisible: 20,
        drawThreshold: 0  // Alle Labels werden immer angezeigt
      }
    },
    borderWidth: 2,
    shadow: true,
    font: {
      face: 'Arial',
      color: '#ffffff'
    }
  },
  groups: {
    center: {
      size: 20,  // Größte Gruppe (innerhalb)
      scaling: {
        label: {
          drawThreshold: 0,
          min: 14,
          max: 20,
          maxVisible: 20
        }
      },
      color: {
        background: '#F2786D', // Start: #F2786D
        border: '#0D8792'      // Komplementär zu #F2786D
      },
      font: {
        size: 18,
        face: 'Arial',
        color: '#ffffff'
      }
    },
    main: {
      size: 18,
      scaling: {
        label: {
          drawThreshold: 0,
          min: 12,
          max: 18,
          maxVisible: 18
        }
      },
      color: {
        background: '#F2BC79', // Zweiter Farbton in der Reihenfolge
        border: '#0D4386'      // Komplementär zu #F2BC79
      },
      font: {
        size: 16,
        face: 'Helvetica',
        color: '#ffffff'
      }
    },
    sub: {
      size: 16,
      scaling: {
        label: {
          drawThreshold: 0,
          min: 10,
          max: 16,
          maxVisible: 16
        }
      },
      color: {
        background: '#0AA6A6', // Dritter Farbton
        border: '#F55959'      // Komplementär zu #0AA6A6
      },
      font: {
        size: 14,
        face: 'Verdana',
        color: '#ffffff'
      }
    },
    aspect: {
      size: 15,  // 1 Stufe über Tools
      scaling: {
        label: {
          drawThreshold: 0,
          min: 10,
          max: 15,
          maxVisible: 15
        }
      },
      color: {
        background: '#143D73', // Vierter Farbton
        border: '#EBC28C'      // Komplementär zu #143D73
      },
      font: {
        size: 14,
        face: 'Tahoma',
        color: '#ffffff'
      }
    },
    tools: {
      size: 14,  // Kleinste Gruppe (äußerst)
      scaling: {
        label: {
          drawThreshold: 0,
          min: 8,
          max: 14,
          maxVisible: 14
        }
      },
      color: {
        background: '#332973', // Fünfter Farbton
        border: '#CCD68C'      // Komplementär zu #332973
      },
      font: {
        size: 12,
        face: 'Tahoma',
        color: '#ffffff'
      }
    }
  },
  edges: {
    width: 1.5,
    smooth: {
      type: 'continuous'
    },
    arrows: {
      to: { enabled: true, scaleFactor: 0.5 }
    },
    color: {
      color: '#6272a4',
      highlight: '#f8f8f2',
      hover: '#f8f8f2'
    }
  },
  physics: {
    enabled: true,
    barnesHut: {
      gravitationalConstant: -2000,
      centralGravity: 0.3,
      springLength: 120,
      springConstant: 0.04,
      damping: 0.09,
      avoidOverlap: 0.5
    }
  },
  interaction: {
    hover: true,
    zoomView: true,
    dragView: true,
    multiselect: false
  }
};

