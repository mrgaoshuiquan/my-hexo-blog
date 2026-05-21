@echo off
chcp 65001 >nul
cd /d D:\HexoBlog

echo 🚀 强推本地源码到 GitHub...
echo.

git add .
git commit -m "backup source: %date% %time%"
git push origin main --force

echo.
echo ✅ 推送完成！
pause