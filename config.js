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
        bordeRadio: 20,                 // Redondez de las esquinas (0 = cuadrado, mayor número = más redondeado)
        transparencia: 1.0,             // Transparencia del widget (1.0 = opaco, 0.5 = semi-transparente, 0.0 = invisible)
        sombra: true                    // Mostrar sombra del widget (true o false)
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

// 🔤 EJEMPLOS DE FUENTES:
// 'Arial, sans-serif' - Fuente moderna y limpia
// 'Georgia, serif' - Fuente elegante con serifas
// 'Times New Roman, serif' - Fuente clásica
// 'Helvetica, sans-serif' - Fuente profesional
// 'Courier New, monospace' - Fuente tipo máquina de escribir
// 'Verdana, sans-serif' - Fuente clara y legible
