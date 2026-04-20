# Frontend

Static website for the Who Are You application.

## Configuration

Before deploying, update `config.js` with your backend URL:

```javascript
window.CONFIG = {
  API_URL: 'https://your-backend-app.ondigitalocean.app'
};
```

## Local Development

```bash
npm install
npm start
```

Opens on http://localhost:8080

## Files

- `index.html` - Main webpage
- `config.js` - Backend API configuration
- `package.json` - Dependencies
