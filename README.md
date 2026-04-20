# Who Are You? - Full Stack Application

A simple full-stack web application with separate frontend and backend, ready for deployment on Digital Ocean.

## 📁 Project Structure

```
whoami-project/
├── backend/                 # Backend API (Node.js + Express)
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   ├── .env.example        # Environment variables template
│   └── README.md           # Backend documentation
│
├── frontend/               # Frontend (Static HTML/CSS/JS)
│   ├── index.html          # Main webpage
│   ├── config.js           # Backend URL configuration
│   ├── package.json        # Frontend dependencies
│   └── README.md           # Frontend documentation
│
├── DEPLOYMENT_GUIDE.md     # 📘 COMPLETE DEPLOYMENT GUIDE
├── .gitignore              # Git ignore file
└── README.md               # This file
```

## 🚀 Quick Start (Local Development)

### Backend
```bash
cd backend
npm install
npm start
# Runs on http://localhost:3000
```

### Frontend
```bash
cd frontend
npm install
npm start
# Opens on http://localhost:8080
```

## 🌐 Deployment to Digital Ocean

**👉 READ THE COMPLETE GUIDE**: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

The guide covers:
- Setting up GitHub repositories
- Deploying backend
- Deploying frontend
- Configuring environment variables
- Testing and troubleshooting

## 🔧 Technology Stack

**Backend:**
- Node.js
- Express.js
- CORS enabled

**Frontend:**
- HTML5
- CSS3 (with animations)
- Vanilla JavaScript
- Responsive design

## 🎯 Features

- ✨ Neon-inspired design with animations
- 🎨 Glowing effects and particle animations
- 📱 Mobile responsive
- 🚀 Separated frontend/backend architecture
- 🔒 CORS configured for security
- ♾️ Auto-deploy enabled

## 📝 API Endpoints

- `GET /health` - Health check
- `GET /api/whoami` - Returns identity message
- `GET /` - API information

## 💡 After Deployment

Once deployed, you'll have two URLs:
- **Frontend URL**: Share this with your manager ✅
- **Backend URL**: For API access only

## 🆘 Need Help?

Check the [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for:
- Step-by-step instructions
- Troubleshooting tips
- Cost breakdown
- Update procedures

## 📄 License

Free to use and modify!
