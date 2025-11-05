# Quick Start Guide - Running the Frontend

## Quick Steps to Run the Frontend Interface

### Option 1: Using Command Prompt (Recommended)

Open **Command Prompt** (not PowerShell) and run:

```cmd
cd frontend
npm install
npm run dev
```

### Option 2: Using PowerShell (If enabled)

If you need to use PowerShell, first enable script execution:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then run:

```powershell
cd frontend
npm install
npm run dev
```

### Option 3: Using Git Bash or WSL

```bash
cd frontend
npm install
npm run dev
```

## What Happens Next?

1. **Dependencies will be installed** - This may take a few minutes the first time
2. **Dev server will start** - You'll see output like:
   ```
   VITE ready in XXX ms
   
   ➜  Local:   http://localhost:8080/
   ➜  Network: http://192.168.x.x:8080/
   ```
3. **Open your browser** - Navigate to `http://localhost:8080/`

## Frontend Interface

Once running, you'll see:

- **Login/Signup** - Authentication page
- **Dashboard** - Main interface after login
- **Document Manager** - Upload and manage PDF documents
- **Chat Interface** - Ask questions about legal documents with AI

## Troubleshooting

### Node.js not installed
Download and install Node.js from: https://nodejs.org/

### Port 8080 already in use
The server will automatically try the next available port, or you can change it in `frontend/vite.config.ts`:
```typescript
server: {
  port: 3000,  // Change to any port
}
```

### Environment variables missing
Make sure `frontend/.env` exists and contains your Supabase credentials.

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in `frontend/dist/`

## Preview Production Build

```bash
npm run preview
```

---

**Project Structure:**
- Frontend: React + Vite + TypeScript
- Backend: Supabase Edge Functions (Deployed separately)
- Database: Supabase (PostgreSQL)
