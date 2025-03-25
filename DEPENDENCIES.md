# Project Dependencies Guide

This document outlines all the dependencies required for the Digital Library Management System.

## Core Dependencies

### Production Dependencies

- **react**: ^18.3.1
  - Core React library
  - Used for building the user interface

- **react-dom**: ^18.3.1
  - React rendering for web
  - Handles DOM manipulation

- **lucide-react**: ^0.344.0
  - Icon library
  - Provides modern, consistent icons

### Development Dependencies

- **@types/react**: ^18.3.5
  - TypeScript definitions for React
  - Provides type safety

- **@types/react-dom**: ^18.3.0
  - TypeScript definitions for React DOM
  - Enables TypeScript support for DOM operations

- **@vitejs/plugin-react**: ^4.3.1
  - Vite plugin for React
  - Enables React support in Vite

- **typescript**: ^5.5.3
  - TypeScript compiler
  - Provides type checking and modern JavaScript features

- **vite**: ^5.4.2
  - Build tool and dev server
  - Provides fast development experience

- **tailwindcss**: ^3.4.1
  - Utility-first CSS framework
  - Handles styling

- **autoprefixer**: ^10.4.18
  - PostCSS plugin
  - Adds vendor prefixes to CSS

- **postcss**: ^8.4.35
  - CSS transformation tool
  - Required for Tailwind CSS

## System Requirements

### Node.js
- Version: 18.0.0 or higher
- Download: [https://nodejs.org/](https://nodejs.org/)

### npm
- Version: 9.0.0 or higher
- Included with Node.js

### Visual Studio Code
- Latest stable version
- Download: [https://code.visualstudio.com/](https://code.visualstudio.com/)

## Version Management

Dependencies are managed through `package.json`. To update all dependencies to their latest versions:

```bash
npm update
```

To check for outdated packages:

```bash
npm outdated
```

## Troubleshooting

If you encounter dependency-related issues:

1. Delete the `node_modules` directory
2. Delete `package-lock.json`
3. Clear npm cache:
   ```bash
   npm cache clean --force
   ```
4. Reinstall dependencies:
   ```bash
   npm install
   ```