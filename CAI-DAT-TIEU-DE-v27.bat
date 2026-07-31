@echo off
setlocal
set "PS=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"

if not exist "%PS%" (
  echo Khong tim thay Windows PowerShell.
  echo Hay bao lai cho ChatGPT de duoc ho tro.
  pause
  exit /b 1
)

"%PS%" -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0apply-mobile-headings-v27.ps1"

if errorlevel 1 (
  echo.
  echo CAI DAT CHUA THANH CONG.
  echo Hay dam bao 2 file cai dat nam trong thu muc:
  echo Documents\GitHub\bydcamau.online
  echo.
  pause
  exit /b 1
)

echo.
echo DA SUA XONG TIEU DE MOBILE.
echo Mo GitHub Desktop, Commit to main, sau do Push origin.
echo.
pause
