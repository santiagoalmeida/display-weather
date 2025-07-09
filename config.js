// 🎯 ARCHIVO DE CONFIGURACIÓN PARA PANTALLA PUBLICITARIA
// Edita solo este archivo para personalizar tu pantalla

const configuracion = {
    // 🌍 CONFIGURACIÓN DE UBICACIÓN
    latitud: -2.1962,        // 👈 Tu latitud
    longitud: -79.8862,      // 👈 Tu longitud
    ciudad: 'Quito',         // 👈 Tu ciudad
    pais: 'Ecuador',         // 👈 Tu país
    
    // 🖼️ CONFIGURACIÓN DE IMAGEN DE FONDO
    imagenUrl: 'imagenes/publicidad.jpg', // 👈 Ruta local de la imagen
    
    // 📺 CONFIGURACIÓN DE PANTALLA
    anchoPantalla: 1366,     // 👈 Ancho de la pantalla en píxeles
    altoPantalla: 768,       // 👈 Alto de la pantalla en píxeles
    
    // 🎨 CONFIGURACIÓN DE ESTILO DEL WIDGET DE TEMPERATURA
    estilo: {
        // 📍 POSICIÓN DEL WIDGET
        posicion: 'superior-izquierda', // Opciones: 'superior-izquierda', 'superior-derecha', 'inferior-izquierda', 'inferior-derecha', 'centro', 'personalizada'
        posicionX: 0,                   // Solo para posición 'personalizada' - distancia desde la izquierda
        posicionY: 0,                   // Solo para posición 'personalizada' - distancia desde arriba
        margen: 15,                     // Margen desde los bordes de la pantalla (en píxeles)
        
        // 📏 TAMAÑO DEL WIDGET
        ancho: 384,                     // Ancho del widget en píxeles
        alto: 432,                      // Alto del widget en píxeles
        
        // 🎨 COLORES
        colorFondo: '#667eea',          // Color principal del fondo (puedes usar nombres como 'blue', 'red', etc.)
        colorFondo2: '#764ba2',         // Color secundario para crear gradiente (déjalo igual al principal para color sólido)
        colorTexto: '#ffffff',          // Color del texto (blanco, negro, etc.)
        
        // 🔤 TIPOGRAFÍA Y TAMAÑOS
        fuentePrincipal: 'Arial, sans-serif', // Fuente del texto (Arial, Georgia, Times, Helvetica, etc.)
        tamanoTemperatura: 120,         // Tamaño de la temperatura principal
        tamanoGrados: 60,               // Tamaño del símbolo de grados (°)
        tamanoMensaje: 24,              // Tamaño del mensaje de temperatura
        tamanoUbicacion: 18,            // Tamaño del texto de ubicación
        tamanoFecha: 16,                // Tamaño de fecha y hora
        tamanoIcono: 40,                // Tamaño del icono del clima
        
        // 🎭 EFECTOS VISUALES
        bordeRadio: 'circular',                 // Redondez de las esquinas (0 = cuadrado, mayor número = más redondeado, 'circular' = circunferencia perfecta)
        transparencia: 0.8,             // Transparencia del widget (1.0 = opaco, 0.8 = semi-transparente, 0.5 = muy transparente, 0.0 = invisible)
        sombra: true,                   // Mostrar sombra del widget (true o false)
        
        // 💬 MENSAJES PERSONALIZABLES
        mostrarMensaje: false,           // Mostrar o ocultar completamente el mensaje de temperatura
        mensajes: {
            // Mensajes según temperatura (puedes usar {temp} para insertar la temperatura)
            muyCaliente: {  // Más de 32°
                texto: 'Hoy estamos a {temp}°<br>momento perfecto para<br><strong>refrescarte</strong>',
                accion: 'refrescarte'
            },
            caliente: {     // 28° - 32°
                texto: 'Hoy estamos a {temp}°<br>momento perfecto para<br><strong>llenarte de frescura</strong>',
                accion: 'llenarte de frescura'
            },
            templado: {     // 24° - 28°
                texto: 'Hoy estamos a {temp}°<br>momento perfecto para<br><strong>disfrutar el día</strong>',
                accion: 'disfrutar el día'
            },
            fresco: {       // 20° - 24°
                texto: 'Hoy estamos a {temp}°<br>momento perfecto para<br><strong>salir a caminar</strong>',
                accion: 'salir a caminar'
            },
            frio: {         // Menos de 20°
                texto: 'Hoy estamos a {temp}°<br>momento perfecto para<br><strong>algo caliente</strong>',
                accion: 'algo caliente'
            }
        }
    }
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📖 GUÍA DE EJEMPLOS - No modificar esta sección
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 🖼️ EJEMPLOS DE RUTAS DE IMAGEN:
// imagenUrl: 'https://mi-sitio.com/mi-imagen.jpg'           // URL externa
// imagenUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'           // URL externa
// imagenUrl: './imagenes/publicidad.jpg'                   // Ruta local relativa
// imagenUrl: '/assets/publicidad.png'                      // Ruta absoluta
// imagenUrl: 'file:///C:/Users/Usuario/Desktop/imagen.jpg' // Ruta local completa (solo funciona localmente)

// 📺 EJEMPLOS DE TAMAÑOS DE PANTALLA COMUNES:
// 1920x1080 (Full HD), 1366x768 (HD), 1280x720 (HD Ready), 1024x768 (XGA)
// 3840x2160 (4K), 2560x1440 (2K), 1440x900 (WXGA+), 800x600 (SVGA)

// 🎨 EJEMPLOS DE ESTILOS PREDEFINIDOS:

// ESTILO MODERNO AZUL (por defecto):
// colorFondo: '#667eea', colorFondo2: '#764ba2', colorTexto: '#ffffff'

// ESTILO ATARDECER:
// colorFondo: '#ff9a9e', colorFondo2: '#fecfef', colorTexto: '#333333'

// ESTILO OCÉANO:
// colorFondo: '#2193b0', colorFondo2: '#6dd5ed', colorTexto: '#ffffff'

// ESTILO BOSQUE:
// colorFondo: '#134e5e', colorFondo2: '#71b280', colorTexto: '#ffffff'

// ESTILO ELEGANTE OSCURO:
// colorFondo: '#434343', colorFondo2: '#000000', colorTexto: '#ffffff'

// ESTILO TROPICAL:
// colorFondo: '#f093fb', colorFondo2: '#f5576c', colorTexto: '#ffffff'

// ESTILO SUNSET NARANJA:
// colorFondo: '#fd746c', colorFondo2: '#ff9068', colorTexto: '#ffffff'

// ESTILO PÚRPURA REAL:
// colorFondo: '#667db6', colorFondo2: '#0082c8', colorTexto: '#ffffff'

// ESTILO VERDE NATURA:
// colorFondo: '#11998e', colorFondo2: '#38ef7d', colorTexto: '#ffffff'

// Para usar colores sólidos sin gradiente, pon el mismo color en colorFondo y colorFondo2

// 🎨 EJEMPLOS DE POSICIONES:
// 'superior-izquierda' - Esquina superior izquierda
// 'superior-derecha' - Esquina superior derecha  
// 'inferior-izquierda' - Esquina inferior izquierda
// 'inferior-derecha' - Esquina inferior derecha
// 'centro' - Centro de la pantalla
// 'personalizada' - Usa posicionX y posicionY para ubicación exacta

// 📏 EJEMPLOS DE MÁRGENES:
// margen: 0 - Widget pegado al borde de la pantalla
// margen: 10 - Margen pequeño (recomendado para pantallas pequeñas)
// margen: 20 - Margen estándar (valor por defecto, bueno para la mayoría de casos)
// margen: 30 - Margen medio (bueno para pantallas grandes)
// margen: 50 - Margen grande (para efectos más espaciosos)
// margen: 100 - Margen muy grande (para centrar la atención en el contenido)

// 💡 CONSEJOS PARA MÁRGENES:
// - Para pantallas de 1920x1080: usa entre 30-50px
// - Para pantallas de 1366x768: usa entre 20-30px
// - Para tablets: usa entre 15-25px
// - Para móviles: usa entre 10-20px
// - El margen NO afecta a la posición 'centro' ni 'personalizada'

// 🔘 EJEMPLOS DE BORDER RADIUS (FORMAS):
// bordeRadio: 0 - Widget completamente cuadrado (esquinas rectas)
// bordeRadio: 10 - Esquinas ligeramente redondeadas
// bordeRadio: 20 - Redondez estándar (valor por defecto)
// bordeRadio: 30 - Esquinas muy redondeadas
// bordeRadio: 50 - Esquinas super redondeadas
// bordeRadio: 'circular' - Widget completamente circular (circunferencia perfecta)

// 💡 CONSEJOS PARA FORMAS:
// - Para widget circular: usa bordeRadio: 'circular' y ancho/alto iguales
// - Para look moderno: usa entre 15-25px
// - Para estilo minimalista: usa 0px (cuadrado)
// - Para estilo suave: usa entre 30-50px
// - El widget circular automáticamente se ajusta al menor de ancho/alto

// 🔤 EJEMPLOS DE FUENTES:
// 'Arial, sans-serif' - Fuente moderna y limpia
// 'Georgia, serif' - Fuente elegante con serifas
// 'Times New Roman, serif' - Fuente clásica
// 'Helvetica, sans-serif' - Fuente profesional
// 'Courier New, monospace' - Fuente tipo máquina de escribir
// 'Verdana, sans-serif' - Fuente clara y legible

// 🎭 EJEMPLOS DE TRANSPARENCIA:
// transparencia: 1.0 - Widget completamente opaco (sin transparencia)
// transparencia: 0.9 - Ligeramente transparente (recomendado para pantallas publicitarias)
// transparencia: 0.8 - Semi-transparente (bueno para superponer sobre imágenes complejas)
// transparencia: 0.7 - Moderadamente transparente
// transparencia: 0.5 - Muy transparente (permite ver mucho del fondo)
// transparencia: 0.3 - Casi invisible (solo para efectos especiales)
// transparencia: 0.0 - Completamente invisible (widget oculto)

// 💡 CONSEJOS PARA LA TRANSPARENCIA:
// - Para pantallas publicitarias: usa entre 0.8 y 1.0
// - Para sobreponer en videos: usa entre 0.6 y 0.8  
// - Para efectos sutiles: usa entre 0.3 y 0.6
// - Combina con sombra: false cuando uses alta transparencia para un look más limpio

// 💬 EJEMPLOS DE MENSAJES PERSONALIZABLES:
// Los mensajes se activan según la temperatura y puedes usar {temp} para insertar la temperatura actual

// 🔕 CONTROL DE VISIBILIDAD DE MENSAJES:
// mostrarMensaje: true  - Mostrar mensajes de temperatura (por defecto)
// mostrarMensaje: false - Ocultar completamente los mensajes (widget minimalista)

// 💡 DISEÑO MINIMALISTA SIN MENSAJES:
// Para un widget más limpio y minimalista, puedes ocultar los mensajes configurando:
// mostrarMensaje: false
// Esto mostrará solo la temperatura, icono, ubicación y fecha/hora

// EJEMPLO PARA CAFETERÍA:
// muyCaliente: { texto: 'Con {temp}° hace calor<br>¡perfecto para un<br><strong>frappé helado!</strong>', accion: 'frappé helado' }
// caliente: { texto: 'Hoy tenemos {temp}°<br>¿qué tal un<br><strong>café frío?</strong>', accion: 'café frío' }
// templado: { texto: 'Con {temp}° el clima está<br>ideal para un<br><strong>café americano</strong>', accion: 'café americano' }
// fresco: { texto: '{temp}° es perfecto<br>para un<br><strong>café caliente</strong>', accion: 'café caliente' }
// frio: { texto: 'Con {temp}° necesitas<br>algo que te caliente<br><strong>¡cappuccino!</strong>', accion: 'cappuccino' }

// EJEMPLO PARA HELADERÍA:
// muyCaliente: { texto: '{temp}° de calor<br>¡hora de un<br><strong>helado XXL!</strong>', accion: 'helado XXL' }
// caliente: { texto: 'Con {temp}° el día pide<br>un delicioso<br><strong>helado</strong>', accion: 'helado' }
// templado: { texto: 'Hoy tenemos {temp}°<br>¿te apetece un<br><strong>frozen yogurt?</strong>', accion: 'frozen yogurt' }
// fresco: { texto: '{temp}° es perfecto<br>para un<br><strong>batido</strong>', accion: 'batido' }
// frio: { texto: 'Aunque haga {temp}°<br>siempre es buen momento<br>para un <strong>postre</strong>', accion: 'postre' }

// EJEMPLO PARA RESTAURANTE:
// muyCaliente: { texto: 'Con {temp}° de calor<br>te recomendamos<br><strong>ensaladas frescas</strong>', accion: 'ensaladas frescas' }
// caliente: { texto: 'Hoy {temp}° perfectos<br>para nuestros<br><strong>platos ligeros</strong>', accion: 'platos ligeros' }
// templado: { texto: 'Con {temp}° el clima<br>está ideal para<br><strong>almorzar aquí</strong>', accion: 'almorzar aquí' }
// fresco: { texto: '{temp}° son perfectos<br>para nuestros<br><strong>platos del día</strong>', accion: 'platos del día' }
// frio: { texto: 'Con {temp}° te calentamos<br>con nuestras<br><strong>sopas caseras</strong>', accion: 'sopas caseras' }

// EJEMPLO PARA GIMNASIO:
// muyCaliente: { texto: 'Con {temp}° de calor<br>entrena en nuestro<br><strong>gym climatizado</strong>', accion: 'gym climatizado' }
// caliente: { texto: 'Hoy {temp}° perfectos<br>para<br><strong>entrenar</strong>', accion: 'entrenar' }
// templado: { texto: '{temp}° ideales<br>para hacer<br><strong>ejercicio</strong>', accion: 'ejercicio' }
// fresco: { texto: 'Con {temp}° es hora<br>de ponerse en<br><strong>forma</strong>', accion: 'forma' }
// frio: { texto: 'Aunque haga {temp}°<br>¡calienta motores<br>y ven a <strong>entrenar!</strong>', accion: 'entrenar' }

// 💡 CONSEJOS PARA MENSAJES:
// - Usa {temp} para insertar la temperatura actual
// - Mantén los mensajes cortos (máximo 3 líneas)
// - Usa <strong> para resaltar la acción principal
// - Adapta el tono al tipo de negocio
// - Prueba diferentes rangos de temperatura para tu zona
// - Configura mostrarMensaje: false para un diseño minimalista

// 🎨 EJEMPLOS DE CONFIGURACIONES ESPECIALES:

// CONFIGURACIÓN MINIMALISTA (sin mensajes):
// mostrarMensaje: false,
// ancho: 300,
// alto: 250,
// bordeRadio: 15

// CONFIGURACIÓN SOLO TEMPERATURA (ultra minimalista):
// mostrarMensaje: false,
// tamanoTemperatura: 200,
// ancho: 250,
// alto: 150

// CONFIGURACIÓN CORPORATIVA (formal):
// mostrarMensaje: true,
// mensajes: {
//     caliente: { texto: 'Temperatura actual: {temp}°<br>Condiciones<br><strong>ideales</strong>' }
// }

// CONFIGURACIÓN CIRCULAR (moderna):
// bordeRadio: 'circular',
// ancho: 300,
// alto: 300,
// mostrarMensaje: false

// CONFIGURACIÓN CIRCULAR CON MENSAJES:
// bordeRadio: 'circular',
// ancho: 400,
// alto: 400,
// tamanoTemperatura: 80,
// tamanoMensaje: 18

// CONFIGURACIÓN CUADRADA (minimalista):
// bordeRadio: 0,
// ancho: 280,
// alto: 280,
// sombra: false

// CONFIGURACIÓN SUPER REDONDEADA:
// bordeRadio: 50,
// ancho: 350,
// alto: 300
