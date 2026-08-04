const LANG_KEY = 'carbontrack_lang';

const UI = {
  es: {
    eyebrow: "Proyecto de hackathon · Cambio climático",
    hero_title: "Cuánto pesa<br><em>tu</em> huella.",
    hero_sub: "Seis preguntas rápidas sobre tu transporte, comida, energía, agua, vuelos y consumo. A cambio: un número real y los cambios que más reducirían tu impacto este año.",
    btn_calculate: "Calcular mi huella",
    btn_simulator: "Simulador en vivo",
    btn_history: "Ver historial guardado",
    your_progress: "Tu progreso",
    saved_calcs: "Cálculos guardados",
    achievements: "Logros",
    title_transport: "Transporte",
    step_food: "Comida",
    sim_label_energy: "Energía",
    title_water: "Agua",
    title_flights: "Vuelos",
    sim_label_shopping: "Compras",
    title_diet: "Alimentación",
    title_energy: "Energía en casa",
    title_shopping: "Compras y consumo",
    hint_transport: "ⓘ La quema de combustible en carros y motos es una de las fuentes más grandes de CO₂ del día a día.",
    hint_diet: "ⓘ La ganadería genera metano, un gas de efecto invernadero muy potente. Comer menos carne roja es de las acciones individuales de mayor impacto.",
    hint_energy: "ⓘ Gran parte de la electricidad mundial todavía se genera quemando carbón o gas.",
    hint_water: "ⓘ Calentar y tratar el agua que usas también consume energía, casi siempre de la red eléctrica.",
    hint_flights: "ⓘ Un solo vuelo largo puede generar más CO₂ que meses de transporte terrestre habitual.",
    hint_shopping: "ⓘ Fabricar ropa y aparatos electrónicos nuevos consume recursos y energía mucho antes de que lleguen a tus manos.",
    legend_transport: "¿Cómo te mueves casi todos los días?",
    legend_km: "¿Cuántos km recorres por semana con ese medio?",
    legend_diet: "¿Cómo describirías tu dieta habitual?",
    legend_energy: "¿Cómo es el consumo eléctrico de tu hogar?",
    legend_water: "¿Cómo describirías tu consumo de agua en casa (duchas largas, lavado frecuente, etc.)?",
    legend_flights: "¿Cuántos vuelos tomas aproximadamente al año?",
    legend_shopping: "¿Con qué frecuencia compras ropa o electrónicos nuevos?",
    opt_car: "Carro particular (gasolina)",
    opt_moto: "Motocicleta",
    opt_public: "Transporte público",
    opt_bike: "Bici / caminar",
    opt_diet_alto: "Carne casi a diario",
    opt_diet_moderado: "Carne algunas veces por semana",
    opt_diet_bajo: "Vegetariana",
    opt_diet_vegano: "Vegana",
    opt_energy_alto: "Alto — A/C casi siempre, casa grande",
    opt_energy_medio: "Medio — uso normal, algo de A/C",
    opt_energy_bajo: "Bajo — consumo eficiente",
    opt_water_alto: "Alto — duchas largas, lavados frecuentes",
    opt_water_medio: "Medio — uso normal",
    opt_water_bajo: "Bajo — consciente del consumo",
    opt_flights_ninguno: "Ninguno",
    opt_flights_pocos: "1–2 vuelos cortos",
    opt_flights_moderado: "Un par de vuelos, alguno largo",
    opt_flights_frecuente: "Viajo frecuentemente / vuelos largos",
    opt_shopping_alto: "Frecuente — compro seguido cosas nuevas",
    opt_shopping_medio: "Moderado — compro cuando lo necesito",
    opt_shopping_bajo: "Bajo — reutilizo, compro poco",
    hint_high: "alto", hint_medium: "medio", hint_low: "bajo", hint_verylow: "muy bajo",
    btn_next: "Siguiente", btn_back: "Atrás",
    btn_view_result: "Ver mi resultado",
    section_your_result: "Tu resultado",
    unit_kg_year: "kg CO₂e / año",
    section_top3: "Tus 3 cambios de mayor impacto",
    btn_save_result: "Guardar este resultado",
    btn_recalculate: "Volver a calcular",
    chapter_goal: "Meta",
    title_goal: "Ponte un objetivo de reducción",
    desc_goal: "Elige cuánto quieres reducir tu huella respecto a tu resultado actual. Cada vez que guardes un nuevo resultado, verás tu progreso hacia esta meta.",
    legend_goal: "Quiero reducir mi huella en:",
    goal_10: "10% — un primer paso",
    goal_20: "20% — meta moderada",
    goal_35: "35% — meta ambiciosa",
    btn_save_goal: "Guardar meta",
    desc_simulator: "Mueve los controles y mira cómo cambiaría tu huella al instante, sin rehacer el cuestionario.",
    opt_sim_car: "Carro",
    sim_label_diet: "Dieta",
    opt_sim_diet_alto: "Carne diaria",
    opt_sim_diet_moderado: "Carne moderada",
    opt_alto: "Alto", opt_medio: "Medio", opt_bajo: "Bajo",
    opt_frecuente: "Frecuente", opt_moderado: "Moderado", opt_sim_pocos: "1-2 cortos",
    btn_back_home: "Volver al inicio",
    footer_text: "CarbonTrack · estimaciones simplificadas con fines educativos para hackathon, basadas en factores de emisión promedio de transporte, dieta, energía, agua, vuelos y consumo. No sustituye un inventario de carbono certificado."
  },
  en: {
    eyebrow: "Hackathon project · Climate change",
    hero_title: "How much does<br><em>your</em> footprint weigh.",
    hero_sub: "Six quick questions about your transport, food, energy, water, flights and shopping. In return: a real number and the changes that would cut your impact the most this year.",
    btn_calculate: "Calculate my footprint",
    btn_simulator: "Live simulator",
    btn_history: "View saved history",
    your_progress: "Your progress",
    saved_calcs: "Saved calculations",
    achievements: "Achievements",
    title_transport: "Transport",
    step_food: "Food",
    sim_label_energy: "Energy",
    title_water: "Water",
    title_flights: "Flights",
    sim_label_shopping: "Shopping",
    title_diet: "Diet",
    title_energy: "Home energy",
    title_shopping: "Shopping & consumption",
    hint_transport: "ⓘ Burning fuel in cars and motorcycles is one of the biggest everyday sources of CO₂.",
    hint_diet: "ⓘ Livestock farming produces methane, a very potent greenhouse gas. Eating less red meat is one of the highest-impact individual actions there is.",
    hint_energy: "ⓘ Much of the world's electricity is still generated by burning coal or gas.",
    hint_water: "ⓘ Heating and treating the water you use also consumes energy, almost always from the power grid.",
    hint_flights: "ⓘ A single long flight can generate more CO₂ than months of everyday ground transport.",
    hint_shopping: "ⓘ Manufacturing new clothes and electronics uses resources and energy long before they reach your hands.",
    legend_transport: "How do you get around on most days?",
    legend_km: "How many km per week do you travel that way?",
    legend_diet: "How would you describe your usual diet?",
    legend_energy: "What's the electricity use like in your home?",
    legend_water: "How would you describe your water use at home (long showers, frequent laundry, etc.)?",
    legend_flights: "About how many flights do you take per year?",
    legend_shopping: "How often do you buy new clothes or electronics?",
    opt_car: "Private car (gasoline)",
    opt_moto: "Motorcycle",
    opt_public: "Public transport",
    opt_bike: "Bike / walking",
    opt_diet_alto: "Meat almost daily",
    opt_diet_moderado: "Meat a few times a week",
    opt_diet_bajo: "Vegetarian",
    opt_diet_vegano: "Vegan",
    opt_energy_alto: "High — A/C almost always, big house",
    opt_energy_medio: "Medium — normal use, some A/C",
    opt_energy_bajo: "Low — efficient use",
    opt_water_alto: "High — long showers, frequent laundry",
    opt_water_medio: "Medium — normal use",
    opt_water_bajo: "Low — mindful of usage",
    opt_flights_ninguno: "None",
    opt_flights_pocos: "1–2 short flights",
    opt_flights_moderado: "A couple of flights, one longer",
    opt_flights_frecuente: "I travel often / long flights",
    opt_shopping_alto: "Frequent — I buy new things often",
    opt_shopping_medio: "Moderate — I buy when I need to",
    opt_shopping_bajo: "Low — I reuse, buy little",
    hint_high: "high", hint_medium: "medium", hint_low: "low", hint_verylow: "very low",
    btn_next: "Next", btn_back: "Back",
    btn_view_result: "See my result",
    section_your_result: "Your result",
    unit_kg_year: "kg CO₂e / year",
    section_top3: "Your top 3 highest-impact changes",
    btn_save_result: "Save this result",
    btn_recalculate: "Recalculate",
    chapter_goal: "Goal",
    title_goal: "Set a reduction target",
    desc_goal: "Choose how much you want to cut your footprint compared to your current result. Every time you save a new result, you'll see your progress toward this goal.",
    legend_goal: "I want to reduce my footprint by:",
    goal_10: "10% — a first step",
    goal_20: "20% — moderate goal",
    goal_35: "35% — ambitious goal",
    btn_save_goal: "Save goal",
    desc_simulator: "Move the controls and see your footprint recalculate instantly, without redoing the quiz.",
    opt_sim_car: "Car",
    sim_label_diet: "Diet",
    opt_sim_diet_alto: "Daily meat",
    opt_sim_diet_moderado: "Moderate meat",
    opt_alto: "High", opt_medio: "Medium", opt_bajo: "Low",
    opt_frecuente: "Frequent", opt_moderado: "Moderate", opt_sim_pocos: "1-2 short",
    btn_back_home: "Back to home",
    footer_text: "CarbonTrack · simplified estimates for educational hackathon purposes, based on average emission factors for transport, diet, energy, water, flights and shopping. Not a substitute for a certified carbon inventory."
  }
};

const DYN = {
  es: {
    required: {
      transport: 'Elige un medio de transporte para continuar.',
      diet: 'Elige un tipo de dieta para continuar.',
      energy: 'Elige un nivel de consumo eléctrico para continuar.',
      water: 'Elige un nivel de consumo de agua para continuar.',
      flights: 'Elige cuántos vuelos tomas al año para continuar.',
      shopping: 'Elige tu frecuencia de compras para continuar.'
    },
    labels: {
      transport:{car:'carro',moto:'moto',public:'transporte público',bike:'bici/caminar'},
      diet:{alto:'carne diaria',moderado:'carne moderada',bajo:'vegetariana',vegano:'vegana'},
      energy:{grande:'alto',media:'medio',pequena:'bajo'},
      water:{alto:'alto',medio:'medio',bajo:'bajo'},
      flights:{frecuente:'viajo frecuentemente',moderado:'un par de vuelos',pocos:'1-2 vuelos cortos',ninguno:'ninguno'},
      shopping:{alto:'alto',medio:'medio',bajo:'bajo'}
    },
    recTitle: {
      transport:(next)=>`Cambia a ${next} en tus trayectos`,
      diet:(next)=>`Reduce el consumo de carne un nivel (hacia ${next})`,
      energy:(next)=>`Baja tu consumo eléctrico hacia un nivel ${next}`,
      energyFallback:'Revisa fugas de consumo en standby y cambia a bombillas LED',
      water:(next)=>`Reduce tu consumo de agua hacia un nivel ${next}`,
      flights:(next)=>`Vuela menos: pasa a "${next}"`,
      shopping:(next)=>`Compra ropa/electrónicos con menos frecuencia (nivel ${next})`
    },
    comboActive:(total,trees,liters)=>`Si haces estos 3 cambios juntos, ahorrarías ${total} kg de CO₂ al año — equivalente a lo que absorben unos ${trees} árboles en un año, o a dejar de quemar cerca de ${liters} litros de gasolina.`,
    comboLow:'Ya estás en niveles bajos en todas las categorías — ¡buen trabajo!',
    compareMore:(diff,avg)=>`Emites un <b>${diff}% más</b> que la referencia estimada (${avg} kg/año). Hay margen claro para reducir.`,
    compareLess:(diff,avg)=>`Emites un <b>${diff}% menos</b> que la referencia estimada (${avg} kg/año). Vas bien encaminado.`,
    goalStatus:(target,percent,baseline,current)=>`Meta activa: bajar a <b>${target} kg/año</b> (${percent}% menos que tu línea base de ${baseline} kg).<br>Tu resultado actual: <b>${current} kg</b>.`,
    goalNone:'Aún no has fijado una meta de reducción.',
    goalProgress:(percent,baseline,target,latest,progressPct)=>`Meta: <b>${percent}% menos</b> que ${baseline} kg (objetivo: ${target} kg).<br>Último resultado guardado: <b>${latest} kg</b> — ${progressPct}% del camino hacia tu meta.`,
    simEqual:'Prácticamente igual a tu último resultado conocido.',
    simLess:(diff,baseline)=>`<b>${diff} kg menos</b> al año que tu último resultado conocido (${baseline} kg).`,
    simMore:(diff,baseline)=>`<b class="worse">${diff} kg más</b> al año que tu último resultado conocido (${baseline} kg).`,
    alertGoalPercent:'Elige un porcentaje de reducción para continuar.',
    alertNeedCalc:'Primero calcula tu huella para poder fijar una meta.',
    alertGoalSaved:(percent,total)=>`Meta guardada: reducir ${percent}% respecto a ${total} kg/año.`,
    alertResultSaved:'Resultado guardado. Puedes verlo en "Ver historial guardado" desde el inicio.',
    alertSaveError:'No se pudo guardar el resultado en este navegador.',
    badgeToastPrefix:'🏅 Nuevo logro: ',
    noSavedResults:'Aún no tienes resultados guardados.',
    badges:[
      {id:'primer_calculo', name:'Primer cálculo', desc:'Calculaste tu huella por primera vez', icon:'🧮'},
      {id:'primer_guardado', name:'Primer registro', desc:'Guardaste tu primer resultado', icon:'📌'},
      {id:'meta_fijada', name:'Meta fijada', desc:'Estableciste una meta de reducción', icon:'🎯'},
      {id:'meta_cumplida', name:'Meta cumplida', desc:'Llegaste a tu objetivo de reducción', icon:'🏆'},
      {id:'bajo_impacto', name:'Bajo impacto', desc:'Tu huella está muy por debajo de la referencia', icon:'🌱'},
      {id:'eco_transporte', name:'Transporte limpio', desc:'Elegiste bici, caminar o transporte público', icon:'🚲'},
      {id:'tres_registros', name:'Constancia', desc:'Guardaste 3 o más resultados', icon:'📈'},
      {id:'tendencia_baja', name:'Tendencia a la baja', desc:'Tu resultado más reciente es menor que tu primer registro', icon:'📉'}
    ]
  },
  en: {
    required: {
      transport: 'Choose a transport mode to continue.',
      diet: 'Choose a diet type to continue.',
      energy: 'Choose an electricity usage level to continue.',
      water: 'Choose a water usage level to continue.',
      flights: 'Choose how many flights you take per year to continue.',
      shopping: 'Choose your shopping frequency to continue.'
    },
    labels: {
      transport:{car:'car',moto:'motorcycle',public:'public transport',bike:'bike/walking'},
      diet:{alto:'daily meat',moderado:'moderate meat',bajo:'vegetarian',vegano:'vegan'},
      energy:{grande:'high',media:'medium',pequena:'low'},
      water:{alto:'high',medio:'medium',bajo:'low'},
      flights:{frecuente:'traveling often',moderado:'a couple of flights',pocos:'1-2 short flights',ninguno:'none'},
      shopping:{alto:'high',medio:'medium',bajo:'low'}
    },
    recTitle: {
      transport:(next)=>`Switch to ${next} for your trips`,
      diet:(next)=>`Cut meat down one level (toward ${next})`,
      energy:(next)=>`Bring your electricity use down to a ${next} level`,
      energyFallback:'Check for standby power drains and switch to LED bulbs',
      water:(next)=>`Cut your water use down to a ${next} level`,
      flights:(next)=>`Fly less: shift to "${next}"`,
      shopping:(next)=>`Buy clothes/electronics less often (${next} level)`
    },
    comboActive:(total,trees,liters)=>`If you make these 3 changes together, you'd save ${total} kg of CO₂ a year — equivalent to what about ${trees} trees absorb in a year, or not burning around ${liters} liters of gasoline.`,
    comboLow:"You're already at low levels across every category — nice work!",
    compareMore:(diff,avg)=>`You emit <b>${diff}% more</b> than the estimated reference (${avg} kg/year). There's clear room to reduce.`,
    compareLess:(diff,avg)=>`You emit <b>${diff}% less</b> than the estimated reference (${avg} kg/year). You're on a good track.`,
    goalStatus:(target,percent,baseline,current)=>`Active goal: bring it down to <b>${target} kg/year</b> (${percent}% less than your baseline of ${baseline} kg).<br>Your current result: <b>${current} kg</b>.`,
    goalNone:"You haven't set a reduction goal yet.",
    goalProgress:(percent,baseline,target,latest,progressPct)=>`Goal: <b>${percent}% less</b> than ${baseline} kg (target: ${target} kg).<br>Latest saved result: <b>${latest} kg</b> — ${progressPct}% of the way to your goal.`,
    simEqual:'Practically the same as your last known result.',
    simLess:(diff,baseline)=>`<b>${diff} kg less</b> per year than your last known result (${baseline} kg).`,
    simMore:(diff,baseline)=>`<b class="worse">${diff} kg more</b> per year than your last known result (${baseline} kg).`,
    alertGoalPercent:'Choose a reduction percentage to continue.',
    alertNeedCalc:'Calculate your footprint first so you can set a goal.',
    alertGoalSaved:(percent,total)=>`Goal saved: reduce ${percent}% from ${total} kg/year.`,
    alertResultSaved:'Result saved. You can see it under "View saved history" from the home screen.',
    alertSaveError:'Could not save the result in this browser.',
    badgeToastPrefix:'🏅 New achievement: ',
    noSavedResults:"You don't have any saved results yet.",
    badges:[
      {id:'primer_calculo', name:'First calculation', desc:'You calculated your footprint for the first time', icon:'🧮'},
      {id:'primer_guardado', name:'First entry', desc:'You saved your first result', icon:'📌'},
      {id:'meta_fijada', name:'Goal set', desc:'You set a reduction goal', icon:'🎯'},
      {id:'meta_cumplida', name:'Goal reached', desc:'You reached your reduction target', icon:'🏆'},
      {id:'bajo_impacto', name:'Low impact', desc:'Your footprint is well below the reference', icon:'🌱'},
      {id:'eco_transporte', name:'Clean transport', desc:'You chose bike, walking, or public transport', icon:'🚲'},
      {id:'tres_registros', name:'Consistency', desc:'You saved 3 or more results', icon:'📈'},
      {id:'tendencia_baja', name:'Downward trend', desc:'Your most recent result is lower than your first entry', icon:'📉'}
    ]
  }
};

function getLang(){
  return localStorage.getItem(LANG_KEY) || 'es';
}

function applyStaticI18n(){
  const lang = getLang();
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(UI[lang][key] !== undefined) el.textContent = UI[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key = el.getAttribute('data-i18n-html');
    if(UI[lang][key] !== undefined) el.innerHTML = UI[lang][key];
  });
  document.getElementById('langToggle').textContent = lang === 'es' ? 'EN' : 'ES';
}

function toggleLang(){
  const next = getLang() === 'es' ? 'en' : 'es';
  localStorage.setItem(LANG_KEY, next);
  applyStaticI18n();
  if(typeof refreshDynamicText === 'function') refreshDynamicText();
}

document.addEventListener('DOMContentLoaded', applyStaticI18n);
