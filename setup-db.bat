@echo off
echo Setting up PostgreSQL database...
echo.
echo Please enter your PostgreSQL password when prompted.
echo (This is the password you set during PostgreSQL installation)
echo.

"C:\Program Files\PostgreSQL\18\bin\psql.exe" -U postgres -f setup.sql

echo.
echo Done! Press any key to exit...
pause > nul
