# Toko Kulit Dhenig (Dhenig Leather) — Web Showcase & Catalog

Modern boutique showcase and digital catalog for **Toko Kulit Dhenig** (Mangga Dua, Jakarta Pusat — Est. 1997).

## Tech Stack
- **Framework:** Next.js 15 (App Router, Server Components)
- **Runtime:** Bun v1.x (Supported on Vercel)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Design Tokens:** Warm Paper / Saddle Tan Leather Heritage Theme
- **Target Domain:** `dhenig.andredev.web.id`

## Remote Dev Workflow (ThinkPad X230 ↔ Server Mydeb)
1. Write code locally in this repo.
2. Commit & push to `cloudandre/dhenig-leather-web`.
3. SSH into server `mydeb`:
   ```bash
   ssh mydeb "cd ~/projects/dhenig-leather-web && git pull && bun install && bun run dev --host 0.0.0.0 --port 3000"
   ```
4. Open `http://100.127.185.42:3000` via Tailscale network.
