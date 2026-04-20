# Digital Ocean Deployment - Quick Reference

## 🎯 Quick Commands

### Push Backend to GitHub
```bash
cd backend
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/whoami-backend.git
git push -u origin main
```

### Push Frontend to GitHub
```bash
cd frontend
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/whoami-frontend.git
git push -u origin main
```

---

## ⚙️ Backend Configuration (Digital Ocean)

**Settings:**
- Resource Type: Web Service
- Run Command: `npm start`
- Region: Bangalore/Singapore
- Plan: Basic $5/month

**Environment Variables:**
```
PORT=8080
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.ondigitalocean.app
```

---

## 🎨 Frontend Configuration (Digital Ocean)

**Settings:**
- Resource Type: Static Site
- Build Command: `npm install`
- Output Directory: `/`
- Region: Same as backend
- Plan: Starter (FREE)

**Before deploying, update frontend/config.js:**
```javascript
window.CONFIG = {
  API_URL: 'https://your-backend-url.ondigitalocean.app'
};
```

---

## 📋 Deployment Checklist

### Backend First:
- [ ] Create GitHub repo: whoami-backend
- [ ] Push code to GitHub
- [ ] Create app on Digital Ocean
- [ ] Connect GitHub repo
- [ ] Set environment variables (PORT, NODE_ENV)
- [ ] Deploy and get backend URL
- [ ] Test: /api/whoami endpoint

### Frontend Second:
- [ ] Update config.js with backend URL
- [ ] Commit and push changes
- [ ] Create GitHub repo: whoami-frontend
- [ ] Push code to GitHub
- [ ] Create app on Digital Ocean (Static Site)
- [ ] Deploy and get frontend URL
- [ ] Update backend FRONTEND_URL variable
- [ ] Test complete flow

---

## 🔗 Important URLs

**Digital Ocean Dashboard:**
https://cloud.digitalocean.com/apps

**Your Apps After Deployment:**
- Backend: `https://whoami-backend-xxxxx.ondigitalocean.app`
- Frontend: `https://whoami-frontend-xxxxx.ondigitalocean.app`

**Test Endpoints:**
- Backend health: `/health`
- Backend API: `/api/whoami`
- Frontend: `/` (main page)

---

## 🐛 Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| CORS Error | Update FRONTEND_URL in backend env vars |
| Button not working | Check config.js has correct backend URL |
| 404 Error | Verify repository branch is 'main' |
| Build failed | Check package.json has correct scripts |
| Old code showing | Clear cache (Ctrl+Shift+R) |

---

## 💰 Costs

- Backend: $5/month
- Frontend: FREE (Starter plan)
- **Total: $5/month**

---

## 🔄 Update Code (After Deployment)

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push origin main
# Auto-deploys in 2-3 minutes!
```

---

## 📞 Support Links

- Digital Ocean Docs: https://docs.digitalocean.com/products/app-platform/
- GitHub Help: https://docs.github.com/
- Node.js Docs: https://nodejs.org/docs/

---

**Remember**: Deploy Backend FIRST, get URL, then deploy Frontend!
