# Backend API

Express.js backend API for the Who Are You application.

## Endpoints

- `GET /health` - Health check
- `GET /api/whoami` - Returns the identity message
- `GET /` - API information

## Local Development

```bash
npm install
npm start
```

Server runs on http://localhost:3000

## Environment Variables

- `PORT` - Server port (default: 3000)
- `FRONTEND_URL` - Frontend URL for CORS
- `NODE_ENV` - Environment (production/development)
