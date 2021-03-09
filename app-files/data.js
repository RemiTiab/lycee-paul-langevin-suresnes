var APP_DATA = {
  "scenes": [
    {
      "id": "0-lyce-entre-principale",
      "name": "Lycée entrée principale",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.03205952408461599,
        "pitch": -0.11792789169667017,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.23213912476121656,
          "pitch": -0.08730041324331062,
          "rotation": 0,
          "target": "2-cours-e"
        },
        {
          "yaw": -0.19733205693272282,
          "pitch": -0.0694670144638092,
          "rotation": 0,
          "target": "1-cours-a"
        },
        {
          "yaw": 0.003157903554816599,
          "pitch": -0.07129976308752717,
          "rotation": 0,
          "target": "13-salle-des-professeurs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5347578921332783,
          "pitch": -0.09953416428097839,
          "title": "Accueil",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-cours-a",
      "name": "Cours A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.791158266225871,
          "pitch": 0.0018112304067763318,
          "rotation": 0.7853981633974483,
          "target": "0-lyce-entre-principale"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2573572974059406,
          "pitch": -0.07011232551627522,
          "title": "Machines à café",
          "text": "Text"
        },
        {
          "yaw": -0.5774651423276733,
          "pitch": -0.008939541419795916,
          "title": "Infirmerie",
          "text": "Text"
        },
        {
          "yaw": -2.635391457971391,
          "pitch": -0.32076589644886866,
          "title": "CDI",
          "text": "Text"
        },
        {
          "yaw": 1.4853818282442068,
          "pitch": -0.19804663753837737,
          "title": "Restaurant scolaire",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-cours-e",
      "name": "Cours E",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "yaw": -0.23629072950077656,
        "pitch": -0.030432527567231915,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.1936001545334243,
          "pitch": -0.17318523522843954,
          "rotation": 4.71238898038469,
          "target": "8-cdi"
        },
        {
          "yaw": 1.4516156198616903,
          "pitch": 0.14766165615989735,
          "rotation": 7.0685834705770345,
          "target": "3-cours-c"
        },
        {
          "yaw": 0.04925455835221726,
          "pitch": -0.06328411847732696,
          "rotation": 0,
          "target": "9-1er-tage-btiment-e"
        },
        {
          "yaw": 0.22019109376799229,
          "pitch": -0.033299053015428015,
          "rotation": 0,
          "target": "5-couloir-btiment-e"
        },
        {
          "yaw": -3.049517911208177,
          "pitch": 0.032728697098750814,
          "rotation": 0,
          "target": "0-lyce-entre-principale"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cours-c",
      "name": "Cours C",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.008882086905014575,
          "pitch": -0.05324141387456294,
          "rotation": 0,
          "target": "4-administration"
        },
        {
          "yaw": -2.8267172096330277,
          "pitch": -0.1283651519306961,
          "rotation": 5.497787143782138,
          "target": "8-cdi"
        },
        {
          "yaw": -2.578800917886106,
          "pitch": 0.3128826704913479,
          "rotation": 0,
          "target": "2-cours-e"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.01755156620073,
          "pitch": -0.07177970662440636,
          "title": "Vie scolaire",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-administration",
      "name": "Administration",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "yaw": 0.3973980450694903,
        "pitch": -0.028530494594280142,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.8740258994279237,
          "pitch": 0.051420179462772,
          "rotation": 0.7853981633974483,
          "target": "14-btiment-administratif"
        },
        {
          "yaw": -1.8412131927313382,
          "pitch": 0.2557247167534129,
          "rotation": 0,
          "target": "3-cours-c"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.946934800633592,
          "pitch": -0.02179207967645347,
          "title": "Vie scolaire",
          "text": "Text"
        },
        {
          "yaw": -0.35490299177603646,
          "pitch": -0.028511029627221518,
          "title": "Foyer",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-couloir-btiment-e",
      "name": "Couloir bâtiment E",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.9356409384845925,
          "pitch": 0.04476417321681225,
          "rotation": 4.71238898038469,
          "target": "7-laboratoire-physique-chimie"
        },
        {
          "yaw": 0.9055472270566547,
          "pitch": 0.09021825445672782,
          "rotation": 7.853981633974483,
          "target": "6-laboratoire-biotechnologies"
        },
        {
          "yaw": 3.05670279164595,
          "pitch": 0.0013236183173255256,
          "rotation": 0,
          "target": "2-cours-e"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "title": "Laboratoire de préparation - Chimie",
          "text": "Text"
        }
      ]
    },
    {
      "id": "6-laboratoire-biotechnologies",
      "name": "Laboratoire Biotechnologies",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3779442363115617,
          "pitch": 0.024788591224766066,
          "rotation": 0,
          "target": "5-couloir-btiment-e"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-laboratoire-physique-chimie",
      "name": "Laboratoire Physique-Chimie",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8961838250606284,
          "pitch": 0.23263186588859597,
          "rotation": 4.71238898038469,
          "target": "5-couloir-btiment-e"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-cdi",
      "name": "CDI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.7774785880443602,
          "pitch": 0.1284383234732367,
          "rotation": 0,
          "target": "2-cours-e"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.03773196623477837,
          "pitch": 0.3914350970463829,
          "title": "CDI",
          "text": "Ancien gymnase"
        }
      ]
    },
    {
      "id": "9-1er-tage-btiment-e",
      "name": "1er étage Bâtiment E",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.2562670213067584,
          "pitch": 0.03650080538193734,
          "rotation": 0,
          "target": "9-1er-tage-btiment-e"
        },
        {
          "yaw": -2.430613226710932,
          "pitch": 0.46558836863954767,
          "rotation": 0.7853981633974483,
          "target": "2-cours-e"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-2me-tage-btiment-e",
      "name": "2ème étage Bâtiment E",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.2057800635775866,
          "pitch": -0.030422798472233836,
          "rotation": 5.497787143782138,
          "target": "11-couloir-svt"
        },
        {
          "yaw": -2.4157033677509965,
          "pitch": 0.60709695651639,
          "rotation": 1.5707963267948966,
          "target": "9-1er-tage-btiment-e"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-couloir-svt",
      "name": "Couloir SVT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.05102897417188679,
          "pitch": 0.03325306121086591,
          "rotation": 0,
          "target": "12-laboratoire-svt"
        },
        {
          "yaw": 2.884700438327534,
          "pitch": 0.30921522419087744,
          "rotation": 0,
          "target": "10-2me-tage-btiment-e"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-laboratoire-svt",
      "name": "Laboratoire SVT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4837905707330759,
          "pitch": 0.2556894954039386,
          "rotation": 4.71238898038469,
          "target": "11-couloir-svt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-salle-des-professeurs",
      "name": "Salle des professeurs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7235914607357063,
          "pitch": 0.14179504285229783,
          "rotation": 0.7853981633974483,
          "target": "0-lyce-entre-principale"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2999076900060089,
          "pitch": 0.46282974495902707,
          "title": "Salle des professeurs",
          "text": "Ancienne piscine&nbsp;"
        }
      ]
    },
    {
      "id": "14-btiment-administratif",
      "name": "Bâtiment administratif",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2816,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.712753464820075,
          "pitch": 0.3147776483857889,
          "rotation": 0,
          "target": "4-administration"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.10258630053471052,
          "pitch": 0.14236789657705096,
          "title": "Intendance",
          "text": "Text"
        },
        {
          "yaw": 0.7040547166633466,
          "pitch": 0.09509506531485101,
          "title": "Secrétariat du proviseur",
          "text": "Text"
        },
        {
          "yaw": 3.0146055571006567,
          "pitch": 0.17768210044986255,
          "title": "Secrétariat des élèves",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Lycée Paul Langevin de Suresnes",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
