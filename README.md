# 📺 Pantalla Publicitaria Personalizable

Una pantalla publicitaria con widget de temperatura completamente personalizable y modular.

## ✨ Nuevas Funcionalidades

🎭 **Widget Circular** - Convierte tu widget en una circunferencia perfecta  
🔕 **Mensajes Configurables** - Control total sobre mensajes o diseño minimalista  
📏 **Márgenes Personalizables** - Ajusta la distancia desde los bordes  
🎨 **Transparencia Avanzada** - Control preciso de opacidad  
⚙️ **Funciones Dinámicas** - Cambios en tiempo real sin recargar

## 📁 Estructura de Archivos

```
display-weather/
├── index.html        # Archivo principal (NO MODIFICAR)
├── config.js         # Configuración personalizable (EDITAR AQUÍ)
├── imagenes/
│   └── publicidad.jpg
└── README.md         # Este archivo
```

## 🎯 Cómo Personalizar tu Pantalla

### ⚠️ IMPORTANTE: 
**Solo edita el archivo `config.js` para personalizar tu pantalla. NO modifiques `index.html`.**

### 1. 🌍 Configuración de Ubicación

Edita estos valores en `config.js`:

```javascript
latitud: -2.1962,     // Tu latitud
longitud: -79.8862,   // Tu longitud
ciudad: 'Tu Ciudad',  // Nombre de tu ciudad
pais: 'Tu País',      // Nombre de tu país
```

### 2. 🖼️ Cambiar Imagen de Fondo

```javascript
imagenUrl: 'ruta/a/tu/imagen.jpg',
```

**Opciones de imagen:**
- URL externa: `'https://ejemplo.com/imagen.jpg'`
- Archivo local: `'imagenes/mi-imagen.jpg'`
- Ruta relativa: `'./assets/fondo.png'`

### 3. 📺 Tamaño de Pantalla

```javascript
anchoPantalla: 1920,  // Ancho en píxeles
altoPantalla: 1080,   // Alto en píxeles
```

**Tamaños comunes:**
- Full HD: 1920x1080
- HD: 1366x768
- 4K: 3840x2160

### 4. 🎨 Personalizar el Widget de Temperatura

#### 📍 Posición y Márgenes:
```javascript
posicion: 'superior-izquierda', // Opciones disponibles:
// 'superior-izquierda', 'superior-derecha'
// 'inferior-izquierda', 'inferior-derecha'
// 'centro', 'personalizada'

margen: 20,  // Distancia desde los bordes (en píxeles)
```

#### 🎨 Colores:
```javascript
colorFondo: '#667eea',   // Color principal
colorFondo2: '#764ba2',  // Color del gradiente
colorTexto: '#ffffff',   // Color del texto
```

**Paletas predefinidas en el archivo config.js:**
- Estilo Océano: `#2193b0` y `#6dd5ed`
- Estilo Atardecer: `#ff9a9e` y `#fecfef`
- Estilo Bosque: `#134e5e` y `#71b280`
- Estilo Tropical: `#f093fb` y `#f5576c`

#### 📏 Tamaños:
```javascript
ancho: 384,              // Ancho del widget
alto: 432,               // Alto del widget
tamanoTemperatura: 120,  // Tamaño de la temperatura
tamanoMensaje: 24,       // Tamaño del mensaje
tamanoUbicacion: 18,     // Tamaño de ubicación
tamanoFecha: 16,         // Tamaño de fecha/hora
tamanoIcono: 40,         // Tamaño del icono
```

#### 🔤 Tipografía:
```javascript
fuentePrincipal: 'Arial, sans-serif', // Fuente
```

**Fuentes disponibles:**
- `'Arial, sans-serif'` - Moderna
- `'Georgia, serif'` - Elegante
- `'Helvetica, sans-serif'` - Profesional
- `'Courier New, monospace'` - Técnica

#### 🎭 Efectos Visuales:
```javascript
bordeRadio: 20,        // Redondez (0-50) o 'circular'
transparencia: 0.9,    // Opacidad (0.0-1.0)
sombra: true           // Mostrar sombra
```

#### 🔘 Formas del Widget:
```javascript
bordeRadio: 0,           // Cuadrado perfecto
bordeRadio: 20,          // Redondeado estándar
bordeRadio: 50,          // Muy redondeado
bordeRadio: 'circular',  // Círculo perfecto
```

#### 💬 Mensajes Personalizables:
```javascript
mostrarMensaje: true,    // true = mostrar, false = ocultar
mensajes: {
    muyCaliente: {  // Más de 32°
        texto: 'Con {temp}° hace calor<br>¡perfecto para un<br><strong>frappé helado!</strong>',
        accion: 'frappé helado'
    },
    // ... más configuraciones
}
```

## 🚀 Cómo Usar

1. **Abre** `config.js` en cualquier editor de texto
2. **Modifica** los valores que desees cambiar
3. **Guarda** el archivo
4. **Abre** `index.html` en tu navegador
5. **Actualiza** la página para ver los cambios

## 📖 Ejemplos de Configuración

### Ejemplo 1: Widget Circular Moderno
```javascript
estilo: {
    posicion: 'superior-derecha',
    bordeRadio: 'circular',
    ancho: 300,
    alto: 300,
    colorFondo: '#2193b0',
    colorFondo2: '#6dd5ed',
    mostrarMensaje: false,
    transparencia: 0.9,
    margen: 30
}
```

### Ejemplo 2: Widget Minimalista (Solo Temperatura)
```javascript
estilo: {
    posicion: 'centro',
    bordeRadio: 0,
    ancho: 250,
    alto: 150,
    colorFondo: '#434343',
    colorFondo2: '#000000',
    mostrarMensaje: false,
    tamanoTemperatura: 200,
    sombra: false
}
```

### Ejemplo 3: Widget para Cafetería
```javascript
estilo: {
    posicion: 'inferior-izquierda',
    bordeRadio: 25,
    colorFondo: '#ff9a9e',
    colorFondo2: '#fecfef',
    colorTexto: '#333333',
    mostrarMensaje: true,
    mensajes: {
        caliente: {
            texto: 'Con {temp}° hace calor<br>¡perfecto para un<br><strong>frappé helado!</strong>',
            accion: 'frappé helado'
        }
    }
}
```

### Ejemplo 4: Widget Corporativo
```javascript
estilo: {
    posicion: 'personalizada',
    posicionX: 100,
    posicionY: 50,
    bordeRadio: 15,
    colorFondo: '#667db6',
    colorFondo2: '#0082c8',
    fuentePrincipal: 'Helvetica, sans-serif',
    transparencia: 1.0,
    mostrarMensaje: true,
    margen: 0
}
```

## 🔧 Funciones Dinámicas Avanzadas

### Cambios en Tiempo Real (Consola del navegador F12):

#### 🖼️ Imágenes:
```javascript
cambiarImagenPublicitaria('nueva/ruta/imagen.jpg');
```

#### 🎭 Transparencia:
```javascript
cambiarTransparencia(0.8);     // Semi-transparente
hacerWidgetOpaco();           // Completamente opaco
hacerWidgetSemiTransparente(); // 80% opacidad
hacerWidgetMuyTransparente();  // 50% opacidad
```

#### 🔘 Formas:
```javascript
hacerWidgetCircular();        // Convierte a círculo
hacerWidgetCuadrado();        // Convierte a cuadrado
hacerWidgetRedondeado(30);    // Radio personalizado
cambiarBordeRadio('circular'); // Control directo
```

#### 📏 Posición y Márgenes:
```javascript
cambiarPosicion('centro');              // Cambiar posición
cambiarPosicion('personalizada', 100, 200); // Posición específica
cambiarMargen(50);                      // Nuevo margen
```

#### 💬 Mensajes:
```javascript
ocultarMensajes();            // Diseño minimalista
mostrarMensajes();            // Mostrar mensajes
cambiarMensaje('caliente', 'Nuevo mensaje con {temp}°');
```

## 🎨 Configuraciones Predefinidas

### 🔵 Circular Moderno:
```javascript
bordeRadio: 'circular', ancho: 300, alto: 300, mostrarMensaje: false
```

### ⬜ Minimalista Cuadrado:
```javascript
bordeRadio: 0, ancho: 280, alto: 280, sombra: false, mostrarMensaje: false
```

### 🌊 Estilo Océano:
```javascript
colorFondo: '#2193b0', colorFondo2: '#6dd5ed', bordeRadio: 25
```

### 🌅 Estilo Atardecer:
```javascript
colorFondo: '#ff9a9e', colorFondo2: '#fecfef', colorTexto: '#333333'
```

## ❓ Solución de Problemas

**Si la imagen no se ve:**
- Verifica que la ruta sea correcta
- Usa una URL externa para probar
- Revisa la consola del navegador (F12)
- Comprueba que el archivo existe en la carpeta `imagenes/`

**Si el widget no se ve bien:**
- Ajusta el tamaño (`ancho` y `alto`)
- Cambia la posición o margen
- Verifica los colores y transparencia
- Para widget circular, usa ancho y alto iguales

**Si los cambios no se aplican:**
- Guarda el archivo `config.js`
- Actualiza la página (F5 o Ctrl+R)
- Verifica que no haya errores de sintaxis
- Revisa la consola del navegador para errores

**Problemas con transparencia:**
- Usa valores entre 0.0 y 1.0
- Combina con `sombra: false` para alta transparencia
- Ajusta colores de texto para mejor contraste

## 🎯 Consejos y Mejores Prácticas

### 🎨 Diseño Visual:
- Usa colores con buen contraste para mejor legibilidad
- Los gradientes se ven mejor que colores sólidos
- Para widgets circulares, usa ancho y alto iguales
- Ajusta transparencia según el fondo de la imagen

### 📐 Posicionamiento:
- Usa márgenes entre 20-50px para pantallas grandes
- Para diseño minimalista, configura `mostrarMensaje: false`
- Posición 'centro' es ideal para presentaciones
- Usa posición 'personalizada' para control exacto

### 💬 Mensajes:
- Personaliza mensajes según tu tipo de negocio
- Usa `{temp}` para insertar temperatura automáticamente
- Mantén mensajes cortos (máximo 3 líneas)
- Usa `<strong>` para resaltar acciones principales

### ⚡ Rendimiento:
- Evita imágenes muy pesadas (>2MB)
- Usa formatos web optimizados (WebP, JPEG optimizado)
- Configura intervalos de actualización apropiados

## 🚀 Casos de Uso

### 🏢 **Oficinas Corporativas:**
```javascript
// Widget minimalista, colores corporativos
bordeRadio: 15, mostrarMensaje: false, colorFondo: '#434343'
```

### ☕ **Cafeterías:**
```javascript
// Mensajes personalizados para productos
mostrarMensaje: true, mensajes con productos de temporada
```

### 🏬 **Centros Comerciales:**
```javascript
// Widget circular moderno, alta visibilidad
bordeRadio: 'circular', transparencia: 0.9, posicion: 'centro'
```

### 📱 **Kioscos Interactivos:**
```javascript
// Diseño limpio, información esencial
mostrarMensaje: false, bordeRadio: 0, sombra: false
```

### 🎪 **Eventos y Ferias:**
```javascript
// Colores llamativos, mensajes promocionales
colorFondo tropical, mensajes dinámicos, alta transparencia
```

## 📋 Lista de Verificación

Antes de implementar, verifica:

- [ ] **Configuración básica** completa (ubicación, imagen, pantalla)
- [ ] **Colores** apropiados para tu marca/ambiente
- [ ] **Tamaño** adecuado para tu resolución de pantalla
- [ ] **Posición** que no interfiera con contenido importante
- [ ] **Transparencia** apropiada para tu imagen de fondo
- [ ] **Mensajes** personalizados para tu negocio (si aplica)
- [ ] **Fuente** legible y profesional
- [ ] **Márgenes** apropiados para tu diseño
- [ ] **Forma** (cuadrado/redondeado/circular) acorde al estilo

## 🔄 Actualizaciones Recientes

### v2.0 - Julio 2025
- ✅ Widget circular con geometría perfecta
- ✅ Sistema de mensajes completamente personalizable
- ✅ Control granular de márgenes
- ✅ Transparencia avanzada con validación
- ✅ Funciones dinámicas para cambios en tiempo real
- ✅ Configuraciones predefinidas para diferentes negocios
- ✅ Documentación expandida con casos de uso

---

💡 **¿Necesitas ayuda?** Revisa los ejemplos en `config.js` o experimenta con las funciones dinámicas en la consola del navegador.
