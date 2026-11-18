# Production deployment

## 1. Backend: Railway

Create a Railway service from this GitHub repository. Railway detects `railway.toml` and builds `backend/Dockerfile`.

Set these Railway variables; do not commit them:

```text
MONGODB_URI=<MongoDB Atlas connection string>
SPRING_DATA_MONGODB_DATABASE=minerva_nexus
CORS_ALLOWED_ORIGIN_PATTERNS=https://minerva-nexus-system.vercel.app,https://minerva-nexus-system-*.vercel.app
```

After the service is healthy, confirm `GET https://<railway-domain>/api/health` returns HTTP 200.

## 2. Frontend: Vercel

In Vercel Project Settings > Environment Variables, add this **public API URL only**:

```text
VITE_API_BASE=https://<railway-domain>
```

Apply it to Production and Preview, then redeploy. Never add `MONGODB_URI` to Vercel or any `VITE_` variable.
