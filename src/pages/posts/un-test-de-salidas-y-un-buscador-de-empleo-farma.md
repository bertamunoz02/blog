---
layout: ../../layouts/Post.astro
title: "Un test de salidas y un buscador de empleo, dos herramientas para tu futuro profesional"
description: "Por qué he creado un test de salidas científicas y un buscador de empleo en farma, cómo los he montado (sin ser programadora) y cómo funcionan."
lede: "Por qué he creado un test de salidas científicas y un buscador de empleo en farma, cómo los he montado (sin ser programadora) y cómo funcionan."
date: 2026-10-19
image: "img/empleo-farma-portada.webp"
imageAlt: "Portada del buscador de empleo farma, con el titular ¿Dónde se está contratando ahora mismo? y los contadores de ofertas, laboratorios y países"
imageCredit: "Portada del buscador de empleo farma. Captura propia."
tags: ["Carrera científica", "Salidas profesionales", "Industria farmacéutica"]
---

Al acabar la carrera te cuentan tres caminos: laboratorio, docencia u oposiciones. Y poco más.

De pequeña quería ser científica. En mi familia he visto de cerca lo que hacen el Alzheimer y el cáncer, y durante años pensé que investigaría precisamente eso. Ya en el último año de Biología me puse a mirar lo que implicaba seguir: el máster, el doctorado, el sueldo, los contratos, la posibilidad de tener que mudarme para seguir investigando. Quería dedicarme a la ciencia, pero también quería poder vivir de mi trabajo. Por eso elegí preparar el BIR, que me parecía una forma de seguir cerca de la investigación con unas condiciones más estables que las de muchas becas.

Pasé un año preparándolo y no conseguí plaza. Cuesta asimilarlo después de haber puesto tanto tiempo y tanta ilusión en un camino. Y luego toca empezar de cero: volver a mirar opciones, buscar trabajo y aceptar que el plan que habías hecho en tu cabeza quizá no va a salir.

En ese punto me di cuenta de dos cosas. La primera, que nadie me había hablado de las salidas que tenía de verdad: industria, regulación, hospitales, datos, divulgación… La segunda, que buscar trabajo en farma consistía en abrir cada mañana las webs de las farmacéuticas, una por una, por si había algo nuevo.

Me cansé de las dos cosas. Así que me hice dos herramientas.

## Cómo las he montado

No soy programadora, pero las he ido construyendo yo, aprendiendo sobre la marcha: combino Claude e Instinct con lo que sé de HTML y CSS, guardo el código en GitHub y las publico ahí mismo, sin pagar un euro por mantenerlas. El camino es siempre parecido: una necesidad real, yo decidiendo qué tiene que hacer la herramienta y qué dice cada texto, la ayuda técnica para hacerlo realidad y luego revisar, corregir y volver a revisar. De esta forma de trabajar hablé en [«La IA y el miedo a la informática en ciencias»](/blog/posts/la-ia-y-el-miedo-a-la-informatica-en-ciencias/).

## Qué hacen

El [test de salidas científicas](https://bertamunoz02.github.io/salidas-cientificas/) empieza preguntándote qué has estudiado y sigue con 20 preguntas sobre cómo eres trabajando y qué priorizas. Con eso te ordena 39 salidas, de investigación académica a industria, docencia o comunicación científica, cada una con su descripción y sus puestos concretos. No te dice lo que tienes que ser. Es lo que me habría gustado tener a mí para no elegir a ciegas.

<figure>
  <img src="/blog/img/test-salidas-captura.webp" width="1200" height="750" alt="Portada del test de salidas científicas, con la pregunta ¿Qué salida científica encaja contigo?" loading="lazy" />
  <figcaption>Portada del test de salidas científicas. Captura propia.</figcaption>
</figure>

El [buscador de empleo farma](https://bertamunoz02.github.io/busqueda_empleo/) revisa cada día las webs de empleo de 30 laboratorios y junta las ofertas de España y del resto de Europa en un solo sitio, ordenadas por departamento (si eso de los departamentos te suena raro, hice un [mapa de las áreas de una farma](/blog/posts/estructura-industria-farmaceutica/)). Puedes buscar un puesto concreto, filtrar por país, empresa o fecha, quedarte solo con las prácticas y becas de España, y de ahí vas directa a la oferta real en la web de cada laboratorio. También ves de un vistazo cómo está el sector: quién contrata más y qué perfiles se buscan. Mientras escribo esto hay 3.094 ofertas abiertas, 316 en España. Y para las empresas que no se dejan leer automáticamente, como Johnson & Johnson, Bayer o Boehringer Ingelheim, dejo el enlace directo a sus webs, junto a portales como Talentoteca, InfoJobs, Indeed o LinkedIn.

Las dos son gratis y no piden registrarse.

Las hice pensando en lo perdida que me sentí yo buscando mi primer paso en la industria. Si a ti te ahorran tiempo, ya me doy por contenta, que ya bastante agobia buscar trabajo. Y si ves algo raro, una oferta en el departamento que no toca o una salida que echas en falta, dímelo. Sigo aprendiendo y el feedback me viene de lujo.
