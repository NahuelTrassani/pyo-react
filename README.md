
# 🍝 Pimienta & Orégano — E-commerce React

> 🛍️ Proyecto final del curso de React JS de Coder House. Migración y evolución del [proyecto original en Vanilla JS](https://github.com/NahuelTrassani/Pimienta-Oregano) hacia una Single Page Application construida con React, Context API, React Router y Firebase.

---

## 🌐 Demo en Vivo

🔗 **[Ver Sitio Publicado](#)*https://nahueltrassani.github.io/pyo-react/* 

---

## ✨ Características

| Ícono | Característica | Descripción |
| :---: | :--- | :--- |
| 🛒 | **Carrito de compras** | Agrega, elimina y gestiona productos con Context API |
| 🔢 | **Cálculo de totales** | Subtotales y total final calculados con `reduce` |
| 🔍 | **Filtro por categoría** | Navegación por categorías mediante React Router |
| 📄 | **Detalle de producto** | Vista individual por producto con routing dinámico |
| 🔥 | **Firebase / Firestore** | Base de datos en la nube para productos y órdenes |
| ✅ | **Checkout** | Formulario de compra con generación de orden en Firestore |
| ⏳ | **Renderizado condicional** | Loaders, carrito vacío y estados de sin stock |

---

## 🔨 Stack Tecnológico

- **React 19** — Componentes funcionales y hooks
- **Vite** — Entorno de desarrollo y build
- **React Router DOM** — Navegación SPA
- **Context API** — Estado global del carrito
- **Firebase / Firestore** — Base de datos en la nube
- **CSS3** — Estilos propios con diseño responsive

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── NavBar.jsx
│   ├── CartWidget.jsx
│   ├── ProductosContainer.jsx
│   ├── ProductosList.jsx
│   ├── ProductoCard.jsx
│   ├── ProductoDetailContainer.jsx
│   ├── ProductoDetail.jsx
│   ├── ItemCount.jsx
│   ├── CartContainer.jsx
│   ├── CartItem.jsx
│   └── CheckoutForm.jsx
├── context/
│   └── CartContext.jsx
├── service/
│   └── firebase.js
├── mock/
│   └── getProductos.js
├── data/
│   └── productos.json
├── css/
│   └── styles.css
├── App.jsx
└── main.jsx
```

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio
```bash
git clone https://github.com/NahuelTrassani/pyo-react.git
```

2. Instalar dependencias
```bash
npm install
```

3. Crear el archivo `.env` en la raíz con las credenciales de Firebase
```
VITE_API_KEY=...
VITE_AUTH_DOMAIN=...
VITE_PROJECT_ID=...
VITE_STORAGE_BUCKET=...
VITE_MESSAGING_SENDER_ID=...
VITE_APP_ID=...
```

4. Levantar el proyecto
```bash
npm run dev
```

---

## 📦 Dependencias principales

```bash
npm install react-router-dom
npm install firebase
```

---

## 👤 Autor

**Nahuel Trassani**
- GitHub: [@NahuelTrassani](https://github.com/NahuelTrassani)
- LinkedIn: [linkedin.com/in/nahuel-trassani](https://linkedin.com/in/nahuel-trassani)
=======
# pyo-react
Pimienta y Oregano en React.