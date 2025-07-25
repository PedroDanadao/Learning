@REM made this simple batch file to compile the current TypeScript file into javascript

cd %1
tsc %2 --target es6 --outDir dist