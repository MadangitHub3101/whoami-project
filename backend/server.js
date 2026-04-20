const express = require('express');
const cors = require('cors');
const app = express();

// Use environment variable PORT for Digital Ocean, fallback to 3000 for local
const PORT = process.env.PORT || 3000;

// CORS configuration - allow requests from your frontend
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*', // Will be set in Digital Ocean
  methods: ['GET', 'POST'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Health check endpoint (useful for Digital Ocean)
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Main API endpoint
app.get('/api/whoami', (req, res) => {
  res.json({ 
    message: 'This is Madan',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Backend API is running',
    endpoints: {
      health: '/health',
      whoami: '/api/whoami'
    }
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Backend server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
