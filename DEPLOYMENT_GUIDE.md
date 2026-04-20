# Digital Ocean Deployment Guide

Complete step-by-step guide to deploy your frontend and backend separately on Digital Ocean App Platform.

## 📋 Prerequisites

1. **Digital Ocean Account** - Sign up at https://www.digitalocean.com/
2. **GitHub Account** - Sign up at https://github.com/
3. **Git installed** on your computer
4. Your code ready to push

---

## 🚀 STEP 1: Prepare Your Code

### 1.1 Create GitHub Repositories

You need **TWO separate repositories**:

1. Go to https://github.com/new
2. Create first repo: `whoami-backend`
   - Make it Public or Private
   - Don't add README (we have our own)
3. Create second repo: `whoami-frontend`
   - Make it Public or Private
   - Don't add README

### 1.2 Push Backend to GitHub

Open terminal/command prompt in the `backend` folder:

```bash
cd backend
git init
git add .
git commit -m "Initial backend commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/whoami-backend.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 1.3 Push Frontend to GitHub

Open terminal in the `frontend` folder:

```bash
cd ../frontend
git init
git add .
git commit -m "Initial frontend commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/whoami-frontend.git
git push -u origin main
```

---

## 🔧 STEP 2: Deploy Backend on Digital Ocean

### 2.1 Create Backend App

1. Login to Digital Ocean: https://cloud.digitalocean.com/
2. Click **"Create"** → **"Apps"**
3. Click **"Create App"**

### 2.2 Connect GitHub Repository

1. Choose **GitHub** as source
2. Click **"Manage Access"** if needed and authorize Digital Ocean
3. Select your **whoami-backend** repository
4. Select **main** branch
5. Check **"Autodeploy"** (deploys automatically on git push)
6. Click **"Next"**

### 2.3 Configure Backend Settings

1. **Resource Type**: Should auto-detect as "Web Service"
2. **Name**: `whoami-backend` (or any name you prefer)
3. **Region**: Choose closest to you (e.g., Bangalore, Singapore)
4. **Branch**: main
5. **Source Directory**: `/` (leave as root)
6. **Build Command**: (leave empty - will use npm install)
7. **Run Command**: `npm start`
8. Click **"Edit Plan"**

### 2.4 Choose Backend Plan

1. Select **"Basic"** plan
2. Choose **$5/month** option (cheapest option)
   - Or use **"Professional"** for better performance
3. Click **"Back"**

### 2.5 Environment Variables (IMPORTANT!)

1. Click **"Environment Variables"** section
2. Add these variables:

   ```
   PORT = 8080
   NODE_ENV = production
   FRONTEND_URL = (leave empty for now, we'll update later)
   ```

3. Click **"Save"**

### 2.6 Deploy Backend

1. Review all settings
2. Click **"Next"** → **"Create Resources"**
3. Wait 3-5 minutes for deployment
4. You'll see "Deployed successfully" ✅

### 2.7 Get Backend URL

1. Once deployed, click on your app
2. Copy the URL - looks like: `https://whoami-backend-xxxxx.ondigitalocean.app`
3. **Save this URL** - you'll need it for frontend!

### 2.8 Test Backend

Open in browser: `https://whoami-backend-xxxxx.ondigitalocean.app/api/whoami`

You should see:
```json
{
  "message": "This is Madan",
  "timestamp": "2024-..."
}
```

---

## 🎨 STEP 3: Deploy Frontend on Digital Ocean

### 3.1 Update Frontend Config

**BEFORE DEPLOYING FRONTEND**, update `config.js`:

1. Open `frontend/config.js`
2. Replace with your backend URL:

```javascript
window.CONFIG = {
  API_URL: 'https://whoami-backend-xxxxx.ondigitalocean.app'
};
```

3. Save and commit:

```bash
cd frontend
git add config.js
git commit -m "Update backend URL"
git push origin main
```

### 3.2 Create Frontend App

1. In Digital Ocean, click **"Create"** → **"Apps"** again
2. Click **"Create App"**

### 3.3 Connect Frontend Repository

1. Choose **GitHub**
2. Select your **whoami-frontend** repository
3. Select **main** branch
4. Check **"Autodeploy"**
5. Click **"Next"**

### 3.4 Configure Frontend Settings

1. **Resource Type**: Select "Static Site"
2. **Name**: `whoami-frontend`
3. **Region**: Same as backend (for better performance)
4. **Branch**: main
5. **Build Command**: `npm install`
6. **Output Directory**: `/` (leave as root)
7. Click **"Edit Plan"**

### 3.5 Choose Frontend Plan

1. Select **"Starter"** (FREE for static sites!)
2. Or choose **"Basic $5/month"** if you need more bandwidth
3. Click **"Back"**

### 3.6 Deploy Frontend

1. Review settings
2. Click **"Next"** → **"Create Resources"**
3. Wait 3-5 minutes
4. You'll see "Deployed successfully" ✅

### 3.7 Get Frontend URL

1. Copy your frontend URL: `https://whoami-frontend-xxxxx.ondigitalocean.app`
2. **Share this URL with your manager!** 🎉

---

## 🔄 STEP 4: Update Backend CORS (IMPORTANT!)

Now that you have frontend URL, update backend:

1. Go to Digital Ocean → Apps → **whoami-backend**
2. Click **"Settings"** tab
3. Scroll to **"App-Level Environment Variables"**
4. Edit **FRONTEND_URL** variable:
   ```
   FRONTEND_URL = https://whoami-frontend-xxxxx.ondigitalocean.app
   ```
5. Click **"Save"**
6. Backend will auto-redeploy (wait 2-3 minutes)

---

## ✅ STEP 5: Test Everything

1. Open your frontend URL in browser
2. Click **"WHO ARE YOU?"** button
3. You should see: **"This is Madan"** ✨

---

## 📱 URLs to Share with Manager

After deployment, you'll have:

- **Frontend**: `https://whoami-frontend-xxxxx.ondigitalocean.app` (Share this!)
- **Backend API**: `https://whoami-backend-xxxxx.ondigitalocean.app`

---

## 🔧 Troubleshooting

### Problem: Button doesn't work / CORS error

**Solution**: Make sure you:
1. Updated `config.js` with correct backend URL
2. Set `FRONTEND_URL` environment variable in backend
3. Redeployed backend after adding FRONTEND_URL

### Problem: Backend not responding

**Solution**:
1. Check backend logs in Digital Ocean dashboard
2. Verify `npm start` command is running
3. Ensure PORT is set to 8080

### Problem: Frontend shows old code

**Solution**:
1. Clear browser cache (Ctrl+Shift+R)
2. Check if latest commit is deployed in Digital Ocean

---

## 💰 Cost Breakdown

- **Backend**: $5/month (Basic plan)
- **Frontend**: FREE (Starter) or $5/month (Basic)
- **Total**: $5-10/month

You can pause/destroy apps anytime to stop charges.

---

## 🔄 Making Updates

### Update Backend Code:
```bash
cd backend
# Make your changes
git add .
git commit -m "Update message"
git push origin main
# Auto-deploys in 2-3 minutes!
```

### Update Frontend Code:
```bash
cd frontend
# Make your changes
git add .
git commit -m "Update UI"
git push origin main
# Auto-deploys in 2-3 minutes!
```

---

## 📞 Support

If stuck:
1. Check Digital Ocean logs (Apps → Your App → Runtime Logs)
2. Visit Digital Ocean Docs: https://docs.digitalocean.com/products/app-platform/
3. Contact Digital Ocean support

---

## 🎉 You're Done!

Your manager can now access the website from anywhere in the world! 🌍
