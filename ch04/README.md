## Section 4: Improved Development Workflow and Debugging

### Understanding NPM scripts
Installed packages are located in `node_modules`.
- Any scripts can be registered in "scripts" `package.json`
- Install packages: `npm install ${PackageName}@{Version}`
    - only for dev environment: `--save-dev` argument
    - install globally: `-g`

### Using nodemon for auto-restarts
1. Install `nodemon` (for development environment only)
   ```bash
   npm install nodemon --save-dev
   ```
2. Run app using `nodemon` (Here, also using babel-node for ES6 transpiling)
    ```bash
    npx nodemon --exec babel-node app.js
    ```