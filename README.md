# 🌿 Plant Gallery – Ejemplos React Básicos

Este proyecto contiene una serie de ejemplos simples construidos con **React** para mostrar el uso de componentes, estado (`useState`) y efectos (`useEffect`). A través de una galería de plantas, se explican distintos conceptos fundamentales de React.

---

## 🚀 Cómo Ejecutar el Proyecto y Ver los Ejemplos

Para probar este proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio:**

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
2. Instala las dependencias
npm install
3. Ejecuta la aplicación en modo desarrollo:
npm run dev
4. Explora los ejemplos navegando entre ramas:
# Ejemplo 1.0 – Galería básica
git checkout ejemplo/1.0-galeria-basica

# Ejemplo 1.1 – Plantas favoritas (useState)
git checkout ejemplo/1.1-favourite-plants

# Ejemplo 1.2 – Panel lateral de favoritas (useState + useEffect)
git checkout ejemplo/1.2-favourites-panel

# Ejemplo 1.3 – Scroll automático a favoritas (useRef)
git checkout ejemplo/1.3-scroll-favourites

---

## 🧪 Ejemplo 1.0 – Galería de Plantas (Componentes Básicos)

Se creó una aplicación que muestra una **galería de plantas** en formato de tarjetas (cards). Cada tarjeta contiene una imagen, nombre y descripción de la planta.  
Este ejemplo muestra cómo:

- Definir componentes funcionales (`PlantCard`).
- Pasar props a componentes.
- Renderizar listas en React (`.map()`).

---

## ⭐ Ejemplo 1.1 – Favourite Plants (Estado con useState)

En esta extensión del ejemplo anterior, se agregó la funcionalidad para que el usuario pueda **marcar o desmarcar una planta como favorita**.

- Se utilizó `useState` para manejar si una planta es favorita o no.
- Al hacer clic en una tarjeta o ícono, se actualiza su estado de "favorita".
- Permite aprender cómo manejar estados booleanos e interacción con eventos (`onClick`).

---

## 🪴 Ejemplo 1.2 – Panel de Plantas Favoritas (useState + useEffect)

Este ejemplo agrega una **sección lateral** que muestra solamente las plantas que han sido marcadas como favoritas.

- Se usó `useState` para almacenar la lista de plantas favoritas.
- Se usó `useEffect` para observar los cambios en la lista de favoritas y forzar un render correcto al actualizarse.
- Se estructuró la vista en **dos columnas**: una con todas las plantas y otra con solo las favoritas.
- Permite demostrar cómo separar visualmente partes del estado de una aplicación y cómo reaccionar a sus cambios.

---

## 🔗 Ejemplo 1.3 – Scroll Automático a Favoritas (useRef)

En este ejemplo se incorporó el hook `useRef` para mejorar la **interacción con el DOM**.  
Cuando se marca una planta como favorita, la aplicación hace scroll automático hacia la sección de favoritas para destacar el cambio.

- Se creó una referencia con `useRef()` a la sección de favoritas.
- Al agregar una planta como favorita, se invoca `.scrollIntoView({ behavior: 'smooth' })` para mover la vista.
- Se mantiene la funcionalidad de marcar y desmarcar favoritas (`useState`) y la actualización automática del panel (`useEffect`).

Este ejemplo muestra cómo integrar React con funciones imperativas del navegador usando referencias.

---

## 🔄 Otros Hooks Propuestos

Además de `useState`, `useEffect` y `useRef`, existen otros hooks de React que podrían haberse integrado en estos ejemplos para extender la funcionalidad o mejorar la estructura del código. A continuación se presentan algunas ideas:

### `useMemo`

- **Propósito**: Memoriza cálculos costosos para evitar recomputarlos en cada render.
- **Aplicación posible**: Optimizar el filtrado de plantas favoritas (`.filter()`) para que se recalculen solo cuando cambie el estado de las plantas.

### `useCallback`

- **Propósito**: Memoriza funciones para que no se redefinan innecesariamente en cada render.
- **Aplicación posible**: Prevenir re-creación de funciones de clic (como `handleFavouriteToggle`) que se pasan como props a múltiples componentes.

### `useContext`

- **Propósito**: Compartir estado global sin necesidad de prop-drilling.
- **Aplicación posible**: Crear un contexto para almacenar las plantas favoritas a nivel global, útil si otros componentes en diferentes niveles necesitan acceder/modificar ese estado.

### `useReducer`

- **Propósito**: Manejo más estructurado del estado complejo mediante acciones y reducers.
- **Aplicación posible**: Reemplazar el uso de múltiples `useState` con un solo reducer que administre acciones como “agregar favorita”, “quitar favorita”, “resetear lista”, etc.

---
