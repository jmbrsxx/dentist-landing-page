@echo off
echo ============================================
echo   Deploying to GitHub Pages
echo ============================================

REM Check if GitHub CLI is installed
where gh >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo GitHub CLI not found. Installing...
    winget install GitHub.cli --accept-source-agreements --accept-package-agreements
)

REM Authenticate with GitHub (will open browser)
echo.
echo Please authenticate with GitHub:
gh auth login

REM Create the repository if it doesn't exist
echo.
echo Creating GitHub repository...
gh repo create jmbrsxx/dentist-landing-page --source=. --public --push

REM Build the project
echo.
echo Building the project...
call npm run build

REM Deploy to GitHub Pages
echo.
echo Deploying to GitHub Pages...
call npx gh-pages -d dist

echo.
echo ============================================
echo   Deployment Complete!
echo   Your site will be available at:
echo   https://jmbrsxx.github.io/dentist-landing-page/
echo ============================================
pause
