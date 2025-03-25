# Installation Guide

This guide provides detailed instructions for setting up the Digital Library Management System on your local machine.

## System Requirements

### Required Software

1. **Node.js**
   - Version: 18.0.0 or higher
   - Download from: [https://nodejs.org/](https://nodejs.org/)
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Visual Studio Code**
   - Download from: [https://code.visualstudio.com/](https://code.visualstudio.com/)
   - Recommended for the best development experience

### VS Code Extensions

Install the following extensions for optimal development:

1. **ESLint**
   - ID: dbaeumer.vscode-eslint
   - Purpose: JavaScript/TypeScript linting
   - Installation: Search "ESLint" in VS Code extensions

2. **Prettier**
   - ID: esbenp.prettier-vscode
   - Purpose: Code formatting
   - Installation: Search "Prettier" in VS Code extensions

3. **Tailwind CSS IntelliSense**
   - ID: bradlc.vscode-tailwindcss
   - Purpose: Tailwind CSS class suggestions
   - Installation: Search "Tailwind CSS IntelliSense" in VS Code extensions

4. **ES7+ React/Redux/React-Native snippets**
   - ID: dsznajder.es7-react-js-snippets
   - Purpose: React code snippets
   - Installation: Search "ES7+ React/Redux/React-Native snippets" in VS Code extensions

## VS Code Configuration

### Recommended Settings

1. Open VS Code Settings (File > Preferences > Settings)
2. Add the following settings:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

## Project Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/digital-library.git
   cd digital-library
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Visit: `http://localhost:5173`

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   kill -9 $(lsof -t -i:5173)
   npm run dev
   ```

2. **Node Version Mismatch**
   - Install nvm (Node Version Manager)
   - Run:
     ```bash
     nvm install 18
     nvm use 18
     ```

3. **Dependencies Issues**
   ```bash
   rm -rf node_modules
   rm package-lock.json
   npm cache clean --force
   npm install
   ```

### Getting Help

- Check the [README.md](./README.md) for project documentation
- Review [DEPENDENCIES.md](./DEPENDENCIES.md) for dependency information
- Create an issue in the project repository
- Contact the development team

## Development Workflow

1. Create a new branch for features
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make changes and test locally
   ```bash
   npm run dev
   npm run lint
   ```

3. Commit changes
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

4. Push to repository
   ```bash
   git push origin feature/your-feature-name
   ```

## Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)