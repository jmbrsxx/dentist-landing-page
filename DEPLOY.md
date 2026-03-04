# Deployment Instructions for Dentist Landing Page

## Quick Deploy (Recommended)

Run the deploy script:
```
dentist-landing\deploy.bat
```

## Manual Deployment Steps

### Option 1: Using GitHub CLI (Recommended)

1. Install GitHub CLI from: https://cli.github.com/
2. Open terminal in `dentist-landing` folder
3. Run: `gh auth login` (follow prompts to authenticate)
4. Run: `gh repo create jmbrsxx/dentist-landing-page --source=. --public`
5. Run: `npx gh-pages -d dist`

### Option 2: Using Git Commands

1. Create a new repository at: https://github.com/new
   - Repository name: `dentist-landing-page`
   - Make it **Public**
2. In terminal, run these commands:
```bash
cd dentist-landing
git remote add origin https://github.com/jmbrsxx/dentist-landing-page.git
git push -u origin master
```

3. Go to Repository Settings → Pages
4. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: gh-pages (or master/main)
   - Folder: / (root)
5. Click Save

## After Deployment

Your site will be live at:
**https://jmbrsxx.github.io/dentist-landing-page/**

Note: It may take 1-2 minutes for the site to become available after first deployment.

## Project Details

- **Tech Stack**: React + Vite
- **Build Output**: `dist/` folder
- **Base URL**: `/dentist-landing-page/`

## Development

To run locally:
```bash
cd dentist-landing
npm install
npm run dev
```

To build for production:
```bash
npm run build
```
