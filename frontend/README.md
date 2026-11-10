# Minerva Nexus React frontend

This directory is a React/Vite runtime built from the Figma code exports supplied by the project team. It renders every supplied prototype frame as a React route selected through a URL hash.

## Development

Start the Java system first from the repository root:

```bash
./run.sh
```

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite runs at `http://localhost:3000` and proxies `/api/*` to the existing Java server on port `8080`.

## Production-style demo

```bash
cd frontend
npm run build
```

The build output is written to `../web/react`. With Java running, open:

```text
http://localhost:8080/react/#dashboard
```

Available routes include `#login`, `#dashboard`, `#orders`, `#shifts`, `#dispatch`, `#order-detail`, `#driver`, `#failed-1`, `#redelivery`, `#failed`, `#refused`, and `#returned`.

## Fidelity boundary

The visual page bodies are the original React code layers from the Figma exports. The slim left launcher and browser toolbar are deliberately outside the Figma frame; they only choose a frame and report Java API connectivity. For a clean Figma-size render, append `?embed=1`, for example `http://localhost:8080/react/?embed=1#dashboard`.
