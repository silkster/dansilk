#!/bin/bash
# GITHUB-SETUP.sh — run once locally to push dansilk.com to GitHub
# Repo: https://github.com/silkster/dansilk
# Branch: claude/main

set -e

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$REPO_DIR"

echo "→ Installing dependencies..."
npm install

echo "→ Initialising git..."
git init
git checkout -b claude/main

echo "→ Staging all files..."
git add .

echo "→ Creating initial commit..."
git commit -m "feat: initial build of dansilk.com

Single-page personal website for Dan Silk.
Built with Vite + React 19 + TypeScript + Tailwind CSS v4.
Sections: Hero, About, Work, Projects, Stack, Contact."

echo "→ Adding remote..."
git remote add origin git@github-silkster:silkster/dansilk.git

echo "→ Pushing to origin/claude/main..."
git push -u origin claude/main

echo ""
echo "✓ Done. Visit: https://github.com/silkster/dansilk/tree/claude/main"
echo ""
echo "Next steps:"
echo "  1. Go to https://app.netlify.com → Add new site → Import from Git"
echo "  2. Repo: silkster/dansilk  |  Branch: claude/main"
echo "  3. Build command: npm run build  |  Publish dir: dist"
echo "  4. Deploy site — no env vars needed (fully static build)"
echo "  5. In Netlify site settings → Domain management → add dansilk.com"
