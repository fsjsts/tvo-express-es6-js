# Express for TVO
Express using ES6 and Babel.

### Packages/Middleware
```
{
  "name": "tvo-express-es6",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js",
    "start": "nodemon --experimental-modules --es-module-specifier-resolution=node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.19.2",
    "nodemon": "^3.1.4"
  }
}
```

### Features
  - Based on node's popular framework EXPRESS
  - Route based API layout
  - CORS ready for localhost development
  - Linting equipped

### Routes
```
  -> main
  -> api
```

### How to Run
  ```
  > npm install
  > npm run build
  > npm run start
  ```

### Dockerizing this app is coming soon!
