const CURRENT_DATE = '01/04/2026';
const NEXT_DATE = '09/06/2026';
const rankingSelecciones = [
    {
        rank: 1,
        nombre: "Francia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/fr.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1870.00
            }, {
                date: "01/04/2026",
                points: 1877.32
            }
        ]
    },
    {
        rank: 2,
        nombre: "España",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/es.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1877.18
            }, {
                date: "01/04/2026",
                points: 1876.40
            }
        ]
    },
    {
        rank: 3,
        nombre: "Argentina",
        conf: "CONMEBOL",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ar.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1873.33
            }, {
                date: "01/04/2026",
                points: 1874.81
            }
        ]
    },
    {
        rank: 4,
        nombre: "Inglaterra",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/gb-eng.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1834.12
            }, {
                date: "01/04/2026",
                points: 1825.97
            }
        ]
    }, {
        rank: 5,
        nombre: "Portugal",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/pt.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1760.38
            }, {
                date: "01/04/2026",
                points: 1763.83
            }
        ]
    }, {
        rank: 6,
        nombre: "Brasil",
        conf: "CONMEBOL",
        banderaUrl: "https://flagpedia.net/data/flags/vector/br.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1760.46
            }, {
                date: "01/04/2026",
                points: 1761.16
            }
        ]
    }, {
        rank: 7,
        nombre: "Países Bajos",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/nl.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1756.27
            }, {
                date: "01/04/2026",
                points: 1757.87
            }
        ]
    }, {
        rank: 8,
        nombre: "Marruecos",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ma.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1736.57
            }, {
                date: "01/04/2026",
                points: 1755.87
            }
        ]
    }, {
        rank: 9,
        nombre: "Bélgica",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/be.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1730.71
            }, {
                date: "01/04/2026",
                points: 1734.71
            }
        ]
    }, {
        rank: 10,
        nombre: "Alemania",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/de.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1724.15
            }, {
                date: "01/04/2026",
                points: 1730.37
            }
        ]
    }, {
        rank: 11,
        nombre: "Colombia",
        conf: "CONMEBOL",
        banderaUrl: "https://flagpedia.net/data/flags/vector/co.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1721.43
            }, {
                date: "01/04/2026",
                points: 1718.50
            }
        ]
    }, {
        rank: 12,
        nombre: "Italia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/it.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1716.20
            }, {
                date: "01/04/2026",
                points: 1716.15
            }
        ]
    }, {
        rank: 13,
        nombre: "Uruguay",
        conf: "CONMEBOL",
        banderaUrl: "https://flagpedia.net/data/flags/vector/uy.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1695.10
            }, {
                date: "01/04/2026",
                points: 1700.22
            }
        ]
    }, {
        rank: 14,
        nombre: "Croacia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/hr.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1690.35
            }, {
                date: "01/04/2026",
                points: 1692.11
            }
        ]
    }, {
        rank: 15,
        nombre: "México",
        conf: "CONCACAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/mx.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1675.75
            }, {
                date: "01/04/2026",
                points: 1681.03
            }
        ]
    }, {
        rank: 16,
        nombre: "Japón",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/jp.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1662.15
            }, {
                date: "01/04/2026",
                points: 1668.50
            }
        ]
    }, {
        rank: 17,
        nombre: "EE. UU.",
        conf: "CONCACAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/us.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1658.00
            }, {
                date: "01/04/2026",
                points: 1655.20
            }
        ]
    }, {
        rank: 18,
        nombre: "Suiza",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ch.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1640.40
            }, {
                date: "01/04/2026",
                points: 1638.90
            }
        ]
    }, {
        rank: 19,
        nombre: "Senegal",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/sn.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1634.50
            }, {
                date: "01/04/2026",
                points: 1641.15
            }
        ]
    }, {
        rank: 20,
        nombre: "Irán",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ir.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1630.22
            }, {
                date: "01/04/2026",
                points: 1633.40
            }
        ]
    }, {
        rank: 21,
        nombre: "Dinamarca",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/dk.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1622.10
            }, {
                date: "01/04/2026",
                points: 1620.50
            }
        ]
    }, {
        rank: 22,
        nombre: "Corea del Sur",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/kr.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1610.45
            }, {
                date: "01/04/2026",
                points: 1615.10
            }
        ]
    }, {
        rank: 23,
        nombre: "Austria",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/at.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1605.30
            }, {
                date: "01/04/2026",
                points: 1608.20
            }
        ]
    }, {
        rank: 24,
        nombre: "Australia",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/au.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1595.60
            }, {
                date: "01/04/2026",
                points: 1598.40
            }
        ]
    }, {
        rank: 25,
        nombre: "Ucrania",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ua.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1582.10
            }, {
                date: "01/04/2026",
                points: 1585.50
            }
        ]
    }, {
        rank: 26,
        nombre: "Turquía",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/tr.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1575.40
            }, {
                date: "01/04/2026",
                points: 1580.12
            }
        ]
    }, {
        rank: 27,
        nombre: "Ecuador",
        conf: "CONMEBOL",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ec.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1565.30
            }, {
                date: "01/04/2026",
                points: 1568.10
            }
        ]
    }, {
        rank: 28,
        nombre: "Polonia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/pl.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1555.20
            }, {
                date: "01/04/2026",
                points: 1558.40
            }
        ]
    }, {
        rank: 29,
        nombre: "Suecia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/se.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1550.15
            }, {
                date: "01/04/2026",
                points: 1552.30
            }
        ]
    }, {
        rank: 30,
        nombre: "Gales",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/gb-wls.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1545.60
            }, {
                date: "01/04/2026",
                points: 1548.10
            }
        ]
    }, {
        rank: 31,
        nombre: "Hungría",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/hu.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1540.20
            }, {
                date: "01/04/2026",
                points: 1542.40
            }
        ]
    }, {
        rank: 32,
        nombre: "Serbia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/rs.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1535.10
            }, {
                date: "01/04/2026",
                points: 1537.20
            }
        ]
    }, {
        rank: 33,
        nombre: "Rusia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ru.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1530.15
            }, {
                date: "01/04/2026",
                points: 1530.15
            }
        ]
    }, {
        rank: 34,
        nombre: "Canadá",
        conf: "CONCACAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ca.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1520.40
            }, {
                date: "01/04/2026",
                points: 1525.60
            }
        ]
    }, {
        rank: 35,
        nombre: "Nigeria",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ng.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1515.20
            }, {
                date: "01/04/2026",
                points: 1520.40
            }
        ]
    }, {
        rank: 36,
        nombre: "Argelia",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/dz.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1510.30
            }, {
                date: "01/04/2026",
                points: 1512.80
            }
        ]
    }, {
        rank: 37,
        nombre: "Egipto",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/eg.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1505.40
            }, {
                date: "01/04/2026",
                points: 1510.15
            }
        ]
    }, {
        rank: 38,
        nombre: "Panamá",
        conf: "CONCACAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/pa.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1500.20
            }, {
                date: "01/04/2026",
                points: 1505.40
            }
        ]
    }, {
        rank: 39,
        nombre: "Costa de Marfil",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ci.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1495.10
            }, {
                date: "01/04/2026",
                points: 1499.80
            }
        ]
    }, {
        rank: 40,
        nombre: "Túnez",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/tn.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1490.30
            }, {
                date: "01/04/2026",
                points: 1492.40
            }
        ]
    }, {
        rank: 41,
        nombre: "Camerún",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/cm.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1485.20
            }, {
                date: "01/04/2026",
                points: 1488.60
            }
        ]
    }, {
        rank: 42,
        nombre: "Mali",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ml.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1480.15
            }, {
                date: "01/04/2026",
                points: 1483.20
            }
        ]
    }, {
        rank: 43,
        nombre: "Noruega",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/no.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1475.40
            }, {
                date: "01/04/2026",
                points: 1478.10
            }
        ]
    }, {
        rank: 44,
        nombre: "Eslovaquia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/sk.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1470.20
            }, {
                date: "01/04/2026",
                points: 1472.40
            }
        ]
    }, {
        rank: 45,
        nombre: "Rumania",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ro.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1468.10
            }, {
                date: "01/04/2026",
                points: 1470.80
            }
        ]
    }, {
        rank: 46,
        nombre: "Escocia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/gb-sct.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1465.30
            }, {
                date: "01/04/2026",
                points: 1467.50
            }
        ]
    }, {
        rank: 47,
        nombre: "Grecia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/gr.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1462.40
            }, {
                date: "01/04/2026",
                points: 1464.20
            }
        ]
    }, {
        rank: 48,
        nombre: "República Checa",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/cz.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1460.10
            }, {
                date: "01/04/2026",
                points: 1462.30
            }
        ]
    }, {
        rank: 49,
        nombre: "Catar",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/qa.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1458.20
            }, {
                date: "01/04/2026",
                points: 1460.80
            }
        ]
    }, {
        rank: 50,
        nombre: "Uzbekistán",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/uz.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1462.03
            }, {
                date: "01/04/2026",
                points: 1465.34
            }
        ]
    }, {
        rank: 51,
        nombre: "Arabia Saudita",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/sa.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1450.10
            }, {
                date: "01/04/2026",
                points: 1452.80
            }
        ]
    }, {
        rank: 52,
        nombre: "Chile",
        conf: "CONMEBOL",
        banderaUrl: "https://flagpedia.net/data/flags/vector/cl.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1445.60
            }, {
                date: "01/04/2026",
                points: 1448.20
            }
        ]
    }, {
        rank: 53,
        nombre: "Venezuela",
        conf: "CONMEBOL",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ve.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1442.30
            }, {
                date: "01/04/2026",
                points: 1444.90
            }
        ]
    }, {
        rank: 54,
        nombre: "Eslovenia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/si.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1440.15
            }, {
                date: "01/04/2026",
                points: 1442.70
            }
        ]
    }, {
        rank: 55,
        nombre: "Paraguay",
        conf: "CONMEBOL",
        banderaUrl: "https://flagpedia.net/data/flags/vector/py.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1435.40
            }, {
                date: "01/04/2026",
                points: 1438.10
            }
        ]
    }, {
        rank: 56,
        nombre: "Jamaica",
        conf: "CONCACAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/jm.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1430.20
            }, {
                date: "01/04/2026",
                points: 1432.80
            }
        ]
    }, {
        rank: 57,
        nombre: "Irak",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/iq.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1425.60
            }, {
                date: "01/04/2026",
                points: 1428.30
            }
        ]
    }, {
        rank: 58,
        nombre: "Burkina Faso",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/bf.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1420.15
            }, {
                date: "01/04/2026",
                points: 1422.90
            }
        ]
    }, {
        rank: 59,
        nombre: "Sudáfrica",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/za.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1415.40
            }, {
                date: "01/04/2026",
                points: 1418.20
            }
        ]
    }, {
        rank: 60,
        nombre: "Finlandia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/fi.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1410.20
            }, {
                date: "01/04/2026",
                points: 1412.50
            }
        ]
    }, {
        rank: 61,
        nombre: "Irlanda",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ie.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1405.60
            }, {
                date: "01/04/2026",
                points: 1408.10
            }
        ]
    }, {
        rank: 62,
        nombre: "Albania",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/al.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1400.30
            }, {
                date: "01/04/2026",
                points: 1402.80
            }
        ]
    }, {
        rank: 63,
        nombre: "Cabo Verde",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/cv.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1395.40
            }, {
                date: "01/04/2026",
                points: 1398.20
            }
        ]
    }, {
        rank: 64,
        nombre: "R.D. del Congo",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/cd.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1390.15
            }, {
                date: "01/04/2026",
                points: 1392.70
            }
        ]
    }, {
        rank: 65,
        nombre: "Ghana",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/gh.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1385.60
            }, {
                date: "01/04/2026",
                points: 1388.10
            }
        ]
    }, {
        rank: 66,
        nombre: "Jordania",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/jo.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1380.20
            }, {
                date: "01/04/2026",
                points: 1384.50
            }
        ]
    }, {
        rank: 67,
        nombre: "Emiratos Árabes",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ae.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1375.40
            }, {
                date: "01/04/2026",
                points: 1378.10
            }
        ]
    }, {
        rank: 68,
        nombre: "Islandia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/is.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1370.15
            }, {
                date: "01/04/2026",
                points: 1372.40
            }
        ]
    }, {
        rank: 69,
        nombre: "Macedonia del Norte",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/mk.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1365.30
            }, {
                date: "01/04/2026",
                points: 1368.10
            }
        ]
    }, {
        rank: 70,
        nombre: "Montenegro",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/me.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1360.20
            }, {
                date: "01/04/2026",
                points: 1362.50
            }
        ]
    }, {
        rank: 71,
        nombre: "Georgia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ge.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1355.40
            }, {
                date: "01/04/2026",
                points: 1360.10
            }
        ]
    }, {
        rank: 72,
        nombre: "Irlanda del Norte",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/gb-nir.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1350.15
            }, {
                date: "01/04/2026",
                points: 1352.80
            }
        ]
    }, {
        rank: 73,
        nombre: "Bosnia y Herz.",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ba.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1345.60
            }, {
                date: "01/04/2026",
                points: 1348.10
            }
        ]
    }, {
        rank: 74,
        nombre: "Israel",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/il.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1340.20
            }, {
                date: "01/04/2026",
                points: 1342.50
            }
        ]
    }, {
        rank: 75,
        nombre: "Omán",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/om.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1335.40
            }, {
                date: "01/04/2026",
                points: 1338.10
            }
        ]
    }, {
        rank: 76,
        nombre: "Honduras",
        conf: "CONCACAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/hn.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1330.15
            }, {
                date: "01/04/2026",
                points: 1333.60
            }
        ]
    }, {
        rank: 77,
        nombre: "Costa Rica",
        conf: "CONCACAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/cr.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1325.60
            }, {
                date: "01/04/2026",
                points: 1328.20
            }
        ]
    }, {
        rank: 78,
        nombre: "El Salvador",
        conf: "CONCACAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/sv.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1320.30
            }, {
                date: "01/04/2026",
                points: 1322.90
            }
        ]
    }, {
        rank: 79,
        nombre: "Bulgaria",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/bg.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1315.40
            }, {
                date: "01/04/2026",
                points: 1318.10
            }
        ]
    }, {
        rank: 80,
        nombre: "Guinea",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/gn.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1310.15
            }, {
                date: "01/04/2026",
                points: 1313.50
            }
        ]
    }, {
        rank: 81,
        nombre: "China",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/cn.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1305.60
            }, {
                date: "01/04/2026",
                points: 1308.20
            }
        ]
    }, {
        rank: 82,
        nombre: "Gabón",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ga.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1300.20
            }, {
                date: "01/04/2026",
                points: 1302.70
            }
        ]
    }, {
        rank: 83,
        nombre: "Bolivia",
        conf: "CONMEBOL",
        banderaUrl: "https://flagpedia.net/data/flags/vector/bo.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1295.40
            }, {
                date: "01/04/2026",
                points: 1298.10
            }
        ]
    }, {
        rank: 84,
        nombre: "Curazao",
        conf: "CONCACAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/cw.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1290.15
            }, {
                date: "01/04/2026",
                points: 1292.40
            }
        ]
    }, {
        rank: 85,
        nombre: "Bahréin",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/bh.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1285.30
            }, {
                date: "01/04/2026",
                points: 1288.10
            }
        ]
    }, {
        rank: 86,
        nombre: "Luxemburgo",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/lu.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1280.20
            }, {
                date: "01/04/2026",
                points: 1282.50
            }
        ]
    }, {
        rank: 87,
        nombre: "Haití",
        conf: "CONCACAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ht.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1275.40
            }, {
                date: "01/04/2026",
                points: 1278.10
            }
        ]
    }, {
        rank: 88,
        nombre: "Zambia",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/zm.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1270.15
            }, {
                date: "01/04/2026",
                points: 1273.40
            }
        ]
    }, {
        rank: 89,
        nombre: "Uganda",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ug.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1265.30
            }, {
                date: "01/04/2026",
                points: 1268.20
            }
        ]
    }, {
        rank: 90,
        nombre: "Guinea Ecuatorial",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/gq.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1260.20
            }, {
                date: "01/04/2026",
                points: 1262.80
            }
        ]
    }, {
        rank: 91,
        nombre: "Siria",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/sy.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1255.40
            }, {
                date: "01/04/2026",
                points: 1258.10
            }
        ]
    }, {
        rank: 92,
        nombre: "Benín",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/bj.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1250.15
            }, {
                date: "01/04/2026",
                points: 1252.60
            }
        ]
    }, {
        rank: 93,
        nombre: "Armenia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/am.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1245.30
            }, {
                date: "01/04/2026",
                points: 1248.10
            }
        ]
    }, {
        rank: 94,
        nombre: "Bielorrusia",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/by.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1240.20
            }, {
                date: "01/04/2026",
                points: 1242.40
            }
        ]
    }, {
        rank: 95,
        nombre: "Vietnam",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/vn.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1235.10
            }, {
                date: "01/04/2026",
                points: 1238.20
            }
        ]
    }, {
        rank: 96,
        nombre: "Palestina",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/ps.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1230.15
            }, {
                date: "01/04/2026",
                points: 1233.10
            }
        ]
    }, {
        rank: 97,
        nombre: "Kirguistán",
        conf: "AFC",
        banderaUrl: "https://flagpedia.net/data/flags/vector/kg.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1225.40
            }, {
                date: "01/04/2026",
                points: 1228.10
            }
        ]
    }, {
        rank: 98,
        nombre: "Trinidad y Tobago",
        conf: "CONCACAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/tt.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1220.10
            }, {
                date: "01/04/2026",
                points: 1223.50
            }
        ]
    }, {
        rank: 99,
        nombre: "Mauritania",
        conf: "CAF",
        banderaUrl: "https://flagpedia.net/data/flags/vector/mr.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1215.30
            }, {
                date: "01/04/2026",
                points: 1218.40
            }
        ]
    }, {
        rank: 100,
        nombre: "Kazajistán",
        conf: "UEFA",
        banderaUrl: "https://flagpedia.net/data/flags/vector/kz.svg",
        history: [
            {
                date: "18/01/2026",
                points: 1210.15
            }, {
                date: "01/04/2026",
                points: 1215.80
            }
        ]
    }

];

function formatPoints(n) {
    return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(n);
}
function getPointsOnDate(item, dateStr) {
    const h = item.history || [];
    for (let i = 0; i < h.length; i++) {
        if (h[i].date === dateStr) 
            return h[i].points;
        

    }
    return undefined;
}
function getDelta(item) {
    const a = getPointsOnDate(item, "18/01/2026");
    const b = getPointsOnDate(item, CURRENT_DATE);
    if (typeof a === "number" && typeof b === "number") {
        const d = b - a;
        if (d === 0) 
            return "(=0)";
        
        const sign = d > 0 ? "+" : "";
        return "(" + sign + formatPoints(d) + ")";
    }
    return "";
}

function renderRankingSelecciones() {
    console.log("Rendering dynamic ranking based on points in " + CURRENT_DATE + "...");
    const container = document.getElementById("ranking-rows");
    if (! container) {
        console.warn("Container #ranking-rows not found!");
        return;
    }

    container.innerHTML = "";

    // 1. Crear una copia del array original para no modificarlo directamente
    // 2. Calcular los puntos para cada selección en la fecha actual
    // 3. Ordenar por puntos de forma descendente
    const sortedRanking = [... rankingSelecciones].map(item => {
        let pointsValue = getPointsOnDate(item, CURRENT_DATE);
        if (typeof pointsValue === "undefined") {
            const h = item.history || [];
            pointsValue = h.length > 0 ? h[h.length - 1].points : 0;
        }
        return {
            ...item,
            currentPointsValue: pointsValue
        };
    }).sort((a, b) => b.currentPointsValue - a.currentPointsValue);

    sortedRanking.forEach((item, index) => {
        const row = document.createElement("div");
        const displayRank = index + 1; // Usar el índice como puesto real
        row.className = displayRank > 10 ? "ranking-row extra" : "ranking-row";

        const currentPts = formatPoints(item.currentPointsValue);
        let deltaHtml = "";
        let circleCls = "";
        (function () {
            const a = getPointsOnDate(item, "18/01/2026"); // Comparar contra la base original para el delta
            const b = item.currentPointsValue;
            if (typeof a === "number" && typeof b === "number" && b !== 0 && a !== b) {
                const d = b - a;
                const sign = d > 0 ? "+" : "";
                const cls = d > 0 ? "delta-up" : (d < 0 ? "delta-down" : "delta-zero");
                const txt = d === 0 ? "=0" : sign + formatPoints(d);
                const icon = d > 0 ? "arrow_upward" : (d < 0 ? "arrow_downward" : "horizontal_rule");
                deltaHtml = ` <span class="${cls}"><span class="material-icons delta-icon">${icon}</span>(${txt})</span>`;
                circleCls = d > 0 ? "pos-up" : (d < 0 ? "pos-down" : "");
            }
        })();

        row.innerHTML = `
            <div class="ranking-pos-col">
                <div class="ranking-pos-circle ${circleCls}">${displayRank}.-</div>
            </div>
            <div class="ranking-team">
                <div class="ranking-flag">
                    <img src="${
            item.banderaUrl
        }" alt="${
            item.nombre
        }" loading="lazy" decoding="async" onerror="this.src=FALLBACKS.team">
                </div>
                <div class="ranking-team-text">
                    <span class="ranking-team-name">${
            item.nombre
        }</span>
                    <span class="ranking-conf">${
            item.conf
        }</span>
                </div>
            </div>
            <div class="ranking-points">${deltaHtml} ${currentPts}</div>
        `;
        container.appendChild(row);
    });
}

function parseDate(dateStr) {
    const parts = dateStr.split('/');
    return new Date(parts[2], parts[1] - 1, parts[0]);
}

function ensureNextDateSlot() {
    for (let i = 0; i < rankingSelecciones.length; i++) {
        const item = rankingSelecciones[i];
        const hasNext = typeof getPointsOnDate(item, NEXT_DATE) === "number";
        if (! hasNext) {
            (item.history = item.history || []).push({date: NEXT_DATE, points: 0});
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    ensureNextDateSlot();
    renderRankingSelecciones();
});
