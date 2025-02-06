# Jeans Store

This project is a web application for an online jeans store built with React, TypeScript, and Vite. It provides a user-friendly interface for browsing and purchasing jeans, with features like product search, filtering, and a shopping cart.

## Features

- Browse a wide selection of jeans
- Search and filter products
- Add products to the shopping cart
- Responsive design

## Technologies Used

- React
- TypeScript
- Vite
- ESLint
- Babel/SWC
- Tailwind CSS

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/jeansStore.git
cd jeansStore
```

2. Install dependencies:

```sh
npm install
# or
yarn install
```

3. Start the development server:

```sh
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000` to see the application running.

## Building for Production

To create a production build, run:

```sh
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Setting Up ReactVite with TypeScript and Tailwind CSS

Follow these steps to set up a ReactVite project using TypeScript with Tailwind CSS:

1. Create a new Vite project with the React and TypeScript template:

```sh
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
```

2. Install dependencies:

```sh
npm install
# or
yarn install
```

3. Install Tailwind CSS and its peer dependencies:

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. Configure `tailwind.config.js`:

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. Add the Tailwind directives to your CSS file:

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Import the CSS file in your project:

```ts
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

7. Start the development server:

```sh
npm run dev
# or
yarn dev
```

8. Open your browser and navigate to `http://localhost:3000` to see the application running.

## Setting Up shadcnUI Library in React Vite

Follow these steps to set up the shadcnUI library in a React Vite project:

1. Install shadcnUI and its peer dependencies:

```sh
npm install @shadcn/ui
# or
yarn add @shadcn/ui
```

2. Import shadcnUI components in your project:

```ts
// src/App.tsx
import React from 'react'
import { Button } from '@shadcn/ui'

function App() {
  return (
    <div className="App">
      <Button>Click me</Button>
    </div>
  )
}

export default App
```

3. Start the development server:

```sh
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000` to see the application running with shadcnUI components.

## Installing All shadcnUI Components at Once

To install all the components of the shadcnUI library at once, create a `add-shadcn-components.sh` file with the following content:

```bash
# filepath: /D:/jeansStore/add-shadcn-components.sh
#!/bin/bash

# List of all Shadcn components to add
components=(
  "alert"
  "avatar"
  "button"
  "card"
  "checkbox"
  "dialog"
  "dropdown-menu"
  "input"
  "label"
  "popover"
  "progress"
  "radio-group"
  "select"
  "switch"
  "tabs"
  "textarea"
  "tooltip"
  "accordion"
  "badge"
  "breadcrumb"
  "collapsible"
  "context-menu"
  "date-picker"
  "drawer"
  "link"
  "menu"
  "navbar"
  "notification"
  "pagination"
  "stepper"
  "tabs"
  "toast"
  "tooltip"
  "typography"
  # Add any additional components here if available
)

# Loop through and add each component using npx
for component in "${components[@]}"; do
  echo "Adding $component..."
  npx shadcn add "$component"
done

echo "All components added successfully!"
```

Run the script to install all the components:

```sh
chmod +x add-shadcn-components.sh
./add-shadcn-components.sh
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```