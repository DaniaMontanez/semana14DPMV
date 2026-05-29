# 📝 Registro de Ejercicios - Identificación del Alumno

## 👤 Datos del Alumno
| Campo | Información |
|-------|-------------|
| Nombre completo | [Dania Pamela Montañez] |
| Número de control | [24308051220505] |
| Grupo | [G] |
| Grado | [4] |
| Escuela | [CBTIS122] |
| Especialidad | [Programacion] |

## 📘 Información del Ejercicio
- Título del ejercicio: [⚡ MASTER OF PUPPETS: EL DASHBOARD DEL TOUR MUNDIAL ⚡]
- Descripción:  
  [⚡ MASTER OF PUPPETS: EL DASHBOARD DEL TOUR MUNDIAL ⚡
¡Atención, ingenieros de la gira! La banda está por arrancar el M72 World Tour y la gerencia (representada por el baterista, Lars Ulrich) está furiosa. El software anterior tenía demasiada latencia y no respondía a tiempo a las acciones del usuario.

Para este proyecto, ustedes serán los "Master of Puppets", tirando de los hilos del DOM usando JavaScript. Van a construir un Dashboard Interactivo Completo compuesto por tres módulos esenciales para la gira. Aplicaremos metodologías de Aprendizaje Basado en Proyectos, donde cada línea de código debe reaccionar en tiempo real al usuario mediante los eventos input, change y click.

⏱️ Duración estimada del Proyecto: 4 a 5 Horas (Puede dividirse en varias sesiones de laboratorio).

🎟️ ETAPA 1: La Taquilla VIP (Validación y Formularios)
Enfoque: Validaciones en tiempo real y cálculo matemático. Si un fan no puede comprar su boleto rápidamente, el estadio estará vacío.

1. Maquetación del Escenario (HTML/CSS): Usando Tailwind CSS, construye un formulario de compra oscuro y elegante. Debe incluir:

Un campo de texto <input> para el "Nombre en el Gafete VIP".

Un menú desplegable <select> para elegir la "Zona" (General, Gradas, Snake Pit VIP).

Un botón gigante rojo que diga "CONFIRMAR COMPRA".

Un espacio <span> para mostrar el Precio Total y otro pequeño debajo del nombre para un Contador de Caracteres.

2. Conectando los Cables (JavaScript): Agrega los "oídos" (.addEventListener()) y programa tres funciones Callback:

El Evento input (El Contador): El Callback debe escuchar cada tecla presionada en el campo "Nombre" y actualizar el contador en tiempo real (Ej. "8/20 caracteres"). Si pasa de 20, el texto debe ponerse rojo.

El Evento change (La Calculadora): Escucha el menú desplegable. Cuando el usuario cambie de zona, el Callback leerá el valor y actualizará el Precio Total en la pantalla instantáneamente (Ej. General = $100, VIP = $500).

El Evento click (El Cadenero): Al presionar "Comprar", el Callback validará que el nombre no esté vacío. Si está vacío, lanza un alert() de error; si está correcto, muestra un mensaje de éxito. Recuerda usar event.preventDefault() para que la página no se recargue.

🎛️ ETAPA 2: El Soundboard de Kirk Hammett (Interactividad Multimedia)
Enfoque: Manipulación visual del DOM y atributos basados en escalas. Durante la prueba de sonido, necesitamos un panel de control rápido para probar efectos.

1. Construcción de la Máquina (HTML/CSS): Crea una cuadrícula (Grid) con 4 botones grandes y robustos. Cada uno representará un sonido o efecto del concierto: "Riff de Guitarra", "Doble Bombo", "Grito del Público", "Fuego". Debajo de los botones, agrega un control deslizante (<input type="range">) que represente el nivel de Distorsión del amplificador.

2. Voltaje y Sensores (JavaScript):

El Evento click (La Pirotecnia): Cada botón tendrá un addEventListener. El Callback cambiará el color del botón (simulando que se encendió, por ejemplo, cambiando a un fondo amarillo eléctrico) y agregará un texto en una pantalla virtual que diga "Reproduciendo: [Nombre del efecto]".

El Evento input vs change (El Pedal de Distorsión): Escucha el control deslizante. Cada vez que el usuario lo mueva de izquierda a derecha, el evento disparará un Callback que actualizará un número en pantalla en tiempo real (Ej. "Nivel de Distorsión: 85%").

📋 ETAPA 3: El Filtro del Stage Manager ("Seek & Destroy")
Enfoque: Filtrado de datos del DOM en tiempo real combinando input y renderizado. El equipo técnico tiene un inventario de 200 cajas de equipo. Necesitan encontrarlas en milisegundos.

1. El Inventario (HTML/CSS): Maqueta una lista vertical larga (<ul> y <li>) con al menos 10 elementos de equipo (Ej. Amplificador Marshall, Batería Tama, Bajo ESP, Cables XLR, Pirotecnia, Púas). Arriba de la lista, coloca una potente Barra de Búsqueda (<input type="text">).

2. El Algoritmo de Búsqueda (JavaScript):

El Evento input (Búsqueda Mágica): A la barra de búsqueda agrégale un listener para input. Dentro del Callback, captura lo que el usuario está escribiendo letra por letra. El algoritmo debe ocultar usando CSS (display: none) todos los <li> que NO coincidan con el texto escrito. ¡Acabas de crear un buscador instantáneo!

El Evento click (Subido al camión): Si el Stage Manager da clic directamente sobre el nombre de un equipo en la lista, el Callback debe cambiar el color del texto a verde y tacharlo (text-decoration: line-through), simulando que ya se cargó en el tráiler.

🎙️ ETAPA 4: EL CONCIERTO EN VIVO (Plenaria y Code Review)
Enfoque: Defensa del código, coevaluación y demostración de competencias.

Al finalizar el desarrollo de los 3 módulos, cerraremos el proyecto con una simulación laboral:

Prueba de Sonido (Peer Review): Los equipos intercambiarán computadoras. Tienen 10 minutos para intentar "romper" la taquilla o el inventario del otro equipo (Ej. tratar de meter 100 caracteres en el nombre, o buscar símbolos extraños en el buscador).

La Rueda de Prensa: El docente asumirá el rol del Tour Manager. Un vocero por equipo pasará al frente a demostrar su "Dashboard del Tour".

Pregunta de Defensa Obligatoria: Durante tu presentación, deberás explicar técnicamente (mostrando tu código) cuál fue la diferencia en la experiencia del usuario al usar el evento input en lugar de change tanto en tu contador de caracteres de la Etapa 1, como en tu buscador de la Etapa 3.]

## ❓ Preguntas y Dudas
