---
layout: ../../layouts/Post.astro
title: "Lo de la mosca: el primer mapa completo de un cerebro adulto"
description: "En 2024 un consorcio con Google publicó el conectoma completo del cerebro de una mosca de la fruta: 139.255 neuronas y 50 millones de conexiones. Qué es, cómo se hizo y por qué importa para la medicina."
lede: "Cuando alguien dice que Google ha mapeado el cerebro de una mosca, se refiere a esto. Y es mucho más grande de lo que suena."
date: 2026-09-21
image: "img/mosca-cover.webp"
imageAlt: "Mosca de la fruta (Drosophila melanogaster) vista de perfil, con la probóscide extendida"
imageCredit: "Drosophila melanogaster con la probóscide extendida. Foto: Sanjay Acharya, <a href='https://commons.wikimedia.org/wiki/File:Drosophila_melanogaster_Proboscis.jpg'>Wikimedia Commons</a>, CC BY-SA 4.0"
tags: ["Neurociencia", "Animales", "Noticias"]
---

Esto es una *Drosophila melanogaster*, la mosca de la fruta. Mide unos tres milímetros.
Su cerebro es más pequeño que una semilla de amapola. Y en octubre de 2024 se convirtió
en el **primer cerebro adulto del que conocemos todas y cada una de sus neuronas y cómo
se conectan entre sí**.

A ese mapa se le llama **conectoma**. Es el cableado completo: qué neurona habla con
cuál, por dónde y con cuánta fuerza. Como el plano eléctrico de un edificio, pero de
un edificio vivo.

| El conectoma en cifras | |
|---|---|
| Neuronas | 139.255 |
| Sinapsis | ~50 millones |
| Tipos de célula | 8.453 |
| Longitud total de "cable" neuronal | ~150 m |

## Qué hizo Google exactamente

El proyecto se llama **FlyWire** y lo lideró la Universidad de Princeton (los laboratorios
de Mala Murthy y Sebastian Seung), con Google Research, la Universidad de Cambridge, el
Janelia Research Campus y cientos de científicos y voluntarios de todo el mundo. Los
resultados salieron en un paquete de nueve artículos en *Nature*.

El punto de partida fue un único cerebro de una mosca hembra que ya se había cortado en
**unas 7.000 lonchas finísimas** y fotografiado al microscopio electrónico en 2018. En
total, unos 21 millones de imágenes. Ahí está el problema: en esas imágenes hay millones
de trocitos de neurona y hay que averiguar cuáles pertenecen a la misma célula, loncha a
loncha, como reconstruir 139.000 hilos de espagueti a partir de fotos de rodajas.

Eso es lo que hizo Google. Su equipo entrenó una **inteligencia artificial** para seguir
cada neurona a través de todas las imágenes y unirla en 3D. La IA se equivoca, así que
después vino la parte humana: más de **tres millones de correcciones manuales** hechas
por investigadores y por voluntarios a través de una plataforma en línea. Después se
identificaron las sinapsis, se clasificaron las neuronas por tipo y se les puso nombre.

<figure>
  <img src="/blog/img/mosca-cerebro.webp" alt="Patrones de expresión en el cerebro de Drosophila vistos al microscopio confocal, en colores fluorescentes" width="1200" height="467" />
  <figcaption>Cerebros de mosca al microscopio confocal, con distintas poblaciones de neuronas marcadas por fluorescencia. Foto: Jenett, Schindelin y Heisenberg, <a href="https://commons.wikimedia.org/wiki/File:Drosophila_melanogaster_brain_expression_patterns.jpg">Wikimedia Commons</a>, CC BY 2.0</figcaption>
</figure>

## Por qué una mosca

Porque es el animal más estudiado de la historia de la genética y, al mismo tiempo, su
cerebro es lo bastante pequeño para que este proyecto fuera posible.

- Con la mosca se han ganado **seis premios Nobel**: los cromosomas como portadores de
  los genes, las mutaciones por radiación, los genes que construyen el cuerpo, el sistema
  inmunitario innato y el reloj biológico que regula tu sueño.
- Alrededor del **75 % de los genes relacionados con enfermedades humanas** tienen un
  equivalente en la mosca.
- Aun así, con 139.000 neuronas hace cosas complejas: vuela, aprende, recuerda, corteja,
  duerme y elige qué comer.

El antecedente era mucho más humilde. El único animal con conectoma completo hasta
entonces era el gusano *C. elegans*, con **302 neuronas**, publicado en 1986 tras más de
una década dibujando a mano. La mosca tiene 460 veces más.

<figure>
  <img src="/blog/img/mosca-viales.webp" alt="Viales de cultivo de Drosophila melanogaster en un laboratorio" width="1600" height="867" />
  <figcaption>Viales de cría de moscas en un laboratorio. Foto: Mateus S. Figueiredo, <a href="https://commons.wikimedia.org/wiki/File:Culture_vials_of_Drosophila_melanogaster_in_Unifei.jpg">Wikimedia Commons</a>, CC BY 4.0</figcaption>
</figure>

## Lo que ya ha servido

Un plano no sirve de nada si no lo usas. Y esto ya se está usando.

Un equipo cogió el conectoma completo, le puso a cada neurona un modelo matemático
sencillo y **simuló el cerebro entero en un ordenador**. Después "le dio" azúcar a las
neuronas del gusto en la simulación, y el modelo predijo que la mosca sacaría la
probóscide para comer, exactamente la conducta que ves en la foto de portada. Lo
comprobaron en moscas reales y acertaron. Sin haber programado esa conducta en ningún
sitio: salió del cableado.

También ha permitido descubrir circuitos nuevos, por ejemplo cómo el cerebro de la
mosca decide dejar de caminar, o cómo integra lo que ve con lo que huele.

### Por qué importa para la medicina

Muchas enfermedades del cerebro (Parkinson, Alzheimer, epilepsia, esquizofrenia) son, en parte, problemas de <strong>circuitos</strong>: neuronas que se conectan mal o dejan de hacerlo. Es también el área donde más fármacos fracasan en ensayos clínicos, porque no entendemos bien el sistema que intentamos arreglar.

La mosca se usa desde hace décadas como modelo de estas enfermedades. Tener su cableado completo permite ver qué cambia exactamente en un circuito cuando se introduce una mutación, y probar en simulación qué pasaría al tocar una pieza antes de gastar años y millones en un ensayo.

## Y el cerebro humano, ¿cuándo?

Todavía no. Para hacerse una idea de la escala:

| Cerebro | Neuronas | Estado |
|---|---|---|
| Gusano *C. elegans* | 302 | Completo (1986) |
| Larva de mosca | 3.016 | Completo (2023) |
| Mosca adulta | 139.255 | Completo (2024) |
| Ratón | ~70 millones | En marcha, faltan años |
| Humano | ~86.000 millones | Solo fragmentos |

El mismo equipo de Google, con Harvard, publicó en 2024 la reconstrucción de **un
milímetro cúbico** de corteza humana, una miga de pan. Solo ese trocito ocupó 1,4
petabytes, el equivalente a unos 300.000 DVD. Un cerebro humano entero, a esa resolución,
necesitaría del orden de un zettabyte: más que todo el tráfico de internet de varios
meses. Hoy no hay ni ordenador ni presupuesto para eso.

Pero hace quince años tampoco lo había para la mosca.

> Un conectoma no explica un cerebro igual que un genoma no explica una persona. Pero
> es el mapa sin el cual no puedes empezar a orientarte.

<div class="refs"><span class="small">Referencias</span>
Dorkenwald, S. et al. <i>Neuronal wiring diagram of an adult brain.</i> Nature 634, 124–138 (2024).<br>
Schlegel, P. et al. <i>Whole-brain annotation and multi-connectome cell typing of Drosophila.</i> Nature 634, 139–152 (2024).<br>
Shiu, P. K. et al. <i>A Drosophila computational brain model reveals sensorimotor processing.</i> Nature 634, 210–219 (2024).<br>
Shapson-Coe, A. et al. <i>A petavoxel fragment of human cerebral cortex reconstructed at nanoscale resolution.</i> Science 384 (2024).<br>
White, J. G. et al. <i>The structure of the nervous system of the nematode Caenorhabditis elegans.</i> Phil. Trans. R. Soc. B 314 (1986).<br>
FlyWire Consortium: <a href="https://flywire.ai">flywire.ai</a>
</div>
