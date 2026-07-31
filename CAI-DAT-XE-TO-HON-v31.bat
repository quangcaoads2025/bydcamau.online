@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Dang tang kich thuoc xe len lon hon...
"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0apply-vehicle-size-v31.ps1"
if errorlevel 1 (
  echo.
  echo CO LOI. Vui long chup man hinh gui lai.
  pause
  exit /b 1
)
echo.
echo DA SUA XONG v31.
pause
