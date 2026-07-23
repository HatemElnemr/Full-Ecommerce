<div align="center">

# 🛍️ Full-Ecommerce

**A modern, fast, and beautifully animated e-commerce web app built with React & Vite.**

[View Demo](https://full-ecommerce-beta.vercel.app)

</div>

---

## ✨ Overview

**Full-Ecommerce** is a modern storefront built entirely on the React ecosystem — no framework bloat, just a fast Vite setup with a focus on how the app *feels* to use. Instead of static pages and instant page-jumps, every interaction is designed to feel alive: components animate in smoothly, actions like adding to cart get instant visual confirmation, and content loads in gracefully with skeleton placeholders instead of jarring blank screens.

It's built as a single-page application, so navigating between the home page, product listings, and product details happens instantly without full page reloads — giving it the feel of a native app rather than a traditional website.

---

## 🚀 Features

- 🛒 Product browsing with a clean, responsive layout
- 🎞️ Smooth page and component animations powered by **Framer Motion**
- 🔔 Instant user feedback via **React Hot Toast** notifications
- 💀 Elegant loading skeletons for a polished loading experience
- 🖼️ Interactive carousels/sliders with **Swiper**
- 🧭 Client-side routing with **React Router**
- 📱 Fully responsive design for mobile, tablet, and desktop
- ⚡ Lightning-fast dev experience with **Vite**

---

## 🛠️ Tech Stack

| Category           | Technology                                   |
| ------------------ | -------------------------------------------- |
| Framework          | React 19                                     |
| Build Tool         | Vite                                         |
| Routing            | React Router DOM                             |
| Animations         | Framer Motion                                |
| Notifications      | React Hot Toast                              |
| Icons              | React Icons                                  |
| Loading States     | React Loading Skeleton                       |
| Carousel/Slider    | Swiper                                       |
| Linting            | ESLint                                       |

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/HatemElnemr/Full-Ecommerce.git

# 2. Move into the project directory
cd Full-Ecommerce

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173` 🎉

### Available Scripts

| Command             | Description                               |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Runs the app in development mode          |
| `npm run build`     | Builds the app for production             |
| `npm run preview`   | Previews the production build locally     |
| `npm run lint`      | Runs ESLint to check code quality         |

---

## 📁 Project Structure

```
Full-Ecommerce/
├── public/            # Static assets (icons, images, fonts)
├── src/
│   ├── components/    # Reusable UI building blocks (buttons, cards, navbar, etc.)
│   ├── pages/         # Route-level views (Home, Products, Product Details, Cart...)
│   ├── App.jsx        # Root component and route definitions
│   └── main.jsx       # Application entry point
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

Everything lives under `src/`, split into two simple ideas: **pages** are what the router renders for a given URL, and **components** are the reusable pieces that pages are built from — keeping the codebase easy to navigate as it grows.

---


## 📄 License

This project is licensed under the MIT License — feel free to use it for learning or your own projects.

---

## 👤 Author

**Hatem Elnemr**

- GitHub: [@HatemElnemr](https://github.com/HatemElnemr)

---

<div align="center">

If you found this project helpful, consider giving it a ⭐️!

</div>
