
@REM Made this simple batch file to copy the tsc command that compiles the current file into javascript
@REM to the clipboard, so I can paste it into the terminal.

echo off | clip
(
    echo cd %1
    echo tsc %2 --target es6 --outDir dist
) | clip