@echo off
REM Run backend, client, and admin in separate windows. Default DB: sqlite at Backend\database.sqlite
set ROOT=%~dp0

echo Starting backend...
start "" cmd /k "cd /d "%ROOT%Backend" && set "CONNECTION_STRING=sqlite:./database.sqlite" && npm start"
timeout /t 1 /nobreak >nul

echo Starting client...
start "" cmd /k "cd /d "%ROOT%Frontend\client" && npm start"
timeout /t 1 /nobreak >nul

echo Starting admin...
start "" cmd /k "cd /d "%ROOT%Frontend\admin" && npm run dev"

echo All processes started. Check the opened windows for logs.
