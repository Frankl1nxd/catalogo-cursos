# Catálogo de cursos

Aplicación web sencilla para explorar un catálogo de cursos de programación. Cada curso muestra su descripción, nivel, duración e icono, y cuenta con un botón que simula la inscripción mediante un mensaje de confirmación.

## Sobre este proyecto

Este proyecto es una tarea práctica del módulo de React que estoy cursando actualmente en **Talending**. Su objetivo es aplicar conceptos fundamentales de React, como la composición de componentes reutilizables, el uso de props y el renderizado de listas.

## Estructura del proyecto

```bash
catalogo-cursos/
├─ public/
│  └─ img/                          # Imágenes de los cursos
├─ src/
│  ├─ components/
│  │  ├─ Boton/                    # Botón de inscripción
│  │  ├─ Footer/                   # Pie de página
│  │  ├─ Header/                   # Encabezado de la aplicación
│  │  └─ Tarjeta/                  # Tarjeta con la información del curso
│  ├─ App.jsx                      # Componente principal
│  ├─ App.css                      # Estilos de la aplicación
│  ├─ index.css                    # Estilos base
│  ├─ main.jsx                     # Punto de entrada de React
├─ index.html                       # HTML base
├─ package.json                     # Dependencias y scripts del proyecto
├─ package-lock.json                # Lockfile de npm
├─ vite.config.js                  # Configuración de Vite
├─ eslint.config.js                # Configuración de ESLint
├─ README.md                       # Documentación del proyecto
└─ .gitignore                      # Archivos ignorados por git
```

## Tecnologías

- React
- Vite
- JavaScript
- CSS

## Ejecutar el proyecto

Necesitas tener Node.js y npm instalados.

```bash
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir la aplicación en el navegador.

## Otros comandos

```bash
npm run build  # Genera la versión de producción
npm run preview  # Previsualiza la versión de producción
npm run lint  # Revisa el código con ESLint
```
