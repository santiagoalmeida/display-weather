# 📺 Pantalla Publicitaria Personalizable

Una pantalla publicitaria con widget de temperatura completamente personalizable.

## 📁 Estructura de Archivos

```
rolando-weather/
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

#### 📍 Posición:
```javascript
posicion: 'superior-izquierda', // Opciones disponibles:
// 'superior-izquierda', 'superior-derecha'
// 'inferior-izquierda', 'inferior-derecha'
// 'centro', 'personalizada'
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

#### 📏 Tamaños:
```javascript
ancho: 384,              // Ancho del widget
alto: 432,               // Alto del widget
tamanoTemperatura: 120,  // Tamaño de la temperatura
tamanoMensaje: 24,       // Tamaño del mensaje
```

#### 🔤 Tipografía:
```javascript
fuentePrincipal: 'Arial, sans-serif', // Fuente
```

**Fuentes disponibles:**
- `'Arial, sans-serif'` - Moderna
- `'Georgia, serif'` - Elegante
- `'Helvetica, sans-serif'` - Profesional

#### 🎭 Efectos:
```javascript
bordeRadio: 20,        // Redondez (0-50)
transparencia: 1.0,    // Opacidad (0.0-1.0)
sombra: true           // Mostrar sombra
```

## 🚀 Cómo Usar

1. **Abre** `config.js` en cualquier editor de texto
2. **Modifica** los valores que desees cambiar
3. **Guarda** el archivo
4. **Abre** `index.html` en tu navegador
5. **Actualiza** la página para ver los cambios

## 📖 Ejemplos Rápidos

### Ejemplo 1: Widget en esquina superior derecha, estilo océano
```javascript
estilo: {
    posicion: 'superior-derecha',
    colorFondo: '#2193b0',
    colorFondo2: '#6dd5ed',
    colorTexto: '#ffffff'
}
```

### Ejemplo 2: Widget centrado, más grande, estilo atardecer
```javascript
estilo: {
    posicion: 'centro',
    ancho: 500,
    alto: 500,
    colorFondo: '#ff9a9e',
    colorFondo2: '#fecfef',
    colorTexto: '#333333'
}
```

### Ejemplo 3: Widget personalizado en posición específica
```javascript
estilo: {
    posicion: 'personalizada',
    posicionX: 100,    // 100px desde la izquierda
    posicionY: 200,    // 200px desde arriba
    colorFondo: '#434343',
    colorFondo2: '#000000'
}
```

## 🔧 Funciones Avanzadas

### Cambiar imagen dinámicamente (desde consola del navegador):
```javascript
cambiarImagenPublicitaria('nueva/ruta/imagen.jpg');
```

## ❓ Solución de Problemas

**Si la imagen no se ve:**
- Verifica que la ruta sea correcta
- Usa una URL externa para probar
- Revisa la consola del navegador (F12)

**Si el widget no se ve bien:**
- Ajusta el tamaño (`ancho` y `alto`)
- Cambia la posición
- Verifica los colores y transparencia

**Si los cambios no se aplican:**
- Guarda el archivo `config.js`
- Actualiza la página (F5 o Ctrl+R)
- Verifica que no haya errores de sintaxis

## 🎯 Consejos

- Usa colores con buen contraste para mejor legibilidad
- Ajusta los tamaños según tu resolución de pantalla
- Prueba diferentes posiciones para encontrar la ideal
- Los gradientes se ven mejor que colores sólidos
- Usa transparencia para efectos elegantes
