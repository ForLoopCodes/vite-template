# React Vite TypeScript Template with Tailwind, ShadCN, and Spring-like Animations

This is a starter template app built using **React**, **Vite**, **TypeScript**, **Tailwind CSS**, **ShadCN**, and cubic bezier transitions similar to **Apple's Spring animation effects**. It provides a sleek, responsive UI with smooth animations and a modern theme using **ShadCN's Theme Provider**.

## Features

- **React** and **Vite** for fast development and modern JavaScript tooling.
- **TypeScript** for better developer experience and type safety.
- **Tailwind CSS** for utility-first styling and rapid UI development.
- **ShadCN** with a **Theme Provider** for customizable components and design systems.
- Spring-like cubic bezier animation and transitions for fluid UI effects, inspired by Apple’s motion design.

## Prerequisites

Before you begin, ensure you have the following tools installed on your local machine:

- **Node.js** (v16 or later) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** (optional, but recommended)

## Installation

### 1. Clone the repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/forloopcodes/vite-template.git
cd vite-template
```

### 2. Install dependencies

Run the following command to install the project dependencies:

```bash
npm install
```

Alternatively, if you use **Yarn**, you can run:

```bash
yarn install
```

## Running the Development Server

Once the dependencies are installed, you can start the development server:

```bash
npm run dev
```

This will start the Vite development server at `http://localhost:5173`. Open your browser and navigate to this URL to view the app in action.

## Key Technologies

### React + TypeScript

This app is built with **React** for the UI layer and **TypeScript** for type safety and developer tooling.

### Vite

Vite is a modern, fast build tool and development server that significantly improves the development experience.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework for rapid UI development. It allows you to apply styles directly to your HTML elements, resulting in faster development and less bloated CSS files.

### ShadCN Theme Provider

The app uses **ShadCN** for UI components, providing a set of highly customizable and accessible components with a beautiful default theme. The **Theme Provider** allows you to easily manage global themes.

## Customizing the Theme

You can modify the theme provided by ShadCN by updating the configuration inside `/src/index.css`. Change colors, typography, and other design aspects to fit your needs.

Don't forget to update the **ThemeProvider** in the `src/main.tsx` to reflect the changes:

Fonts like Inter, Space Mono, Space Grotesk, Geist Mono, Geist, IBM PLEX MONO, IBM PLEX Serif are already imported from google fonts.

## Animations and Transitions

This app uses cubic bezier spring-like animations to provide smooth transitions, similar to Apple's native animations.

You can use `var(--spring-light)`, `var(--spring)`, `var(--spring-intense)` cubic bezier functions.

## Contribution

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Contributions are welcome!

---

Enjoy building your app with this powerful and modern template!

```

```
