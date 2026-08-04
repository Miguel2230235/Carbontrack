# 🌍 CarbonTrack

Proyecto de hackathon — **Problema: Cambio Climático**

## El problema

La mayoría de las personas no tiene idea de cuánto CO₂ genera con sus hábitos diarios (transporte, alimentación, energía, agua, vuelos, consumo), por lo que no sabe por dónde empezar a reducir su impacto.

## La solución

**CarbonTrack** es una calculadora web de huella de carbono personal, instalable y bilingüe, que:

1. Hace 6 preguntas rápidas: transporte, alimentación, energía, agua, vuelos y compras/consumo
2. Estima la huella de carbono anual del usuario en kg CO₂e
3. La compara contra una referencia global de huella personal completa
4. Muestra las **3 recomendaciones de mayor impacto**, con una equivalencia relacionable (árboles / litros de gasolina)
5. Permite fijar una meta de reducción y seguir el progreso con una gráfica de línea de tiempo
6. Incluye un **simulador en vivo** para probar escenarios sin rehacer el cuestionario
7. Desbloquea **logros** por hitos como tu primer cálculo o cumplir tu meta
8. Funciona en **español e inglés**, y es instalable como app (PWA) con soporte offline

## Cómo correrlo

No necesita instalación ni dependencias. Solo:

1. Clona o descarga este repositorio
2. Abre `index.html` en tu navegador (doble clic, o clic derecho → "Open with Live Server" en VS Code)
3. Para probar el modo offline/instalable, sírvelo con Live Server (el service worker necesita `http://` o `https://`, no funciona abriendo el archivo directo con `file://`)

```
carbontrack/
├── index.html          # estructura de la app
├── manifest.json        # metadatos de instalación (PWA)
├── sw.js                 # service worker (funcionamiento offline)
├── icons/                # íconos de la app
├── css/
│   └── style.css        # estilos
├── js/
│   ├── i18n.js           # diccionarios ES/EN y lógica de idioma
│   └── script.js         # cálculo, recomendaciones, metas, logros
├── requirements.txt       # sin dependencias de Python (documentado)
└── README.md
```

## Metodología (simplificada)

| Categoría | Factor |
|---|---|
| Carro particular | 0.21 kg CO₂/km |
| Motocicleta | 0.113 kg CO₂/km |
| Transporte público | 0.05 kg CO₂/km |
| Bici / caminar | 0 kg CO₂/km |
| Dieta alta en carne | ~3,300 kg CO₂/año |
| Dieta moderada | ~2,500 kg CO₂/año |
| Vegetariana | ~1,700 kg CO₂/año |
| Vegana | ~1,500 kg CO₂/año |
| Consumo eléctrico alto/medio/bajo | 3,000 / 1,800 / 900 kg CO₂/año |
| Consumo de agua alto/medio/bajo | 700 / 400 / 150 kg CO₂/año |
| Vuelos frecuente/moderado/pocos/ninguno | 3,500 / 1,600 / 600 / 0 kg CO₂/año |
| Compras alto/medio/bajo | 1,500 / 800 / 300 kg CO₂/año |

> Estimaciones simplificadas con fines educativos, basadas en promedios de emisión de cada categoría. No sustituyen un inventario de carbono certificado.

## Por qué este enfoque

Ataca la causa raíz del cambio climático (emisiones individuales por quema de combustibles fósiles) de forma medible, personal y accionable — en vez de solo informar sobre el problema, muestra al usuario **qué hacer al respecto y cuánto impacto tendría**.

## Funciones

- **6 categorías de huella**: transporte, alimentación, energía, agua, vuelos y compras/consumo
- **Recomendaciones combinadas**: cuánto ahorrarías haciendo tus 3 mejores cambios juntos, con equivalencia relacionable
- **Sistema de metas**: fija un objetivo de reducción (10%, 20% o 35%) y sigue tu progreso
- **Simulador en vivo**: ajusta controles y ve tu huella recalcularse al instante
- **Gráfica de línea de tiempo**: evolución de tus resultados guardados, con línea de meta
- **Sistema de logros**: 8 insignias desbloqueables por hitos de uso y progreso
- **Bilingüe**: cambia entre español e inglés con un botón, todo el contenido (incluido el dinámico) se traduce
- **Instalable y offline (PWA)**: manifest + service worker, se puede "instalar" en el celular o la compu y funciona sin internet tras la primera carga
- **UX guiada**: ayudas contextuales (ⓘ), barra de progreso con nombre de cada capítulo, diseño responsive, animaciones sutiles con ilustración de anillos de crecimiento como firma visual

## Posibles próximos pasos

- Integrar datos reales de emisión por país (ej. Our World in Data)
- Modo "reto de equipo" para comparar con amigos o compañeros de clase
- Recomendaciones generadas con un modelo de IA real (requeriría backend propio para proteger la clave de API)
