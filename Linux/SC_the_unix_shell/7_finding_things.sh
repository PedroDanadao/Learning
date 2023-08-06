# you can use the command grep(global/regular expression/print) to print lines
# in a file that match a passed pattern
# $ grep file.txt pattern
# will print the lines in file.txt that have "pattern" in it. Be it just the
# word or the word as part of another word
# the option -w will make sure that the command will print lines that contain
# strictly the word you typed
# you can also search for a phrase in the file by surrounding it in quotes
# $ grep -w "my phrase" file.txt
# it is a good thing to also inclue quotes in single word patterns to 
# diferentiate the pattern from the file
# $ grep file.txt "pattern"
# the option -n will show the line number in which the pattern was found as 
# well as showing the line
# grep is case-sensitive by default. You can use the option -i to make it 
# case insensitive
# to invert the search you can use the option -v. It will print all the 
# lines that dont match the pattern
# the option -r will search the pattern recursively through a set of files,
# printing the file and line that has the pattern
# the -E option will try to search the lines for the regular expression that
# you put inside the quotes

# the command find can search files and folders that match a passed patern
# in their name
# $ find .
# will print files and folders that are in the current folder or are in any
# sub-folder of the current folder
# you can filter the output of find with it's options. "-type d" for example
# will only print directories
# $ find . -type d
# while "-type f" will only print the files
# to find files that match an extension, you can use
# $ find . -name *.txt
# it will only get the files in the current directory, thoug. To get the 
# files in the sub-directories you can use find . -name "*.txt"
# if you encompass a command in $() then the shell will first run the 
# command and substitute $() with wathever is in it
# $ wc -l $(find . -name "*.txt")
# will print the number of lines of each .txt file that is in the current 
# folder or any of it's sub-folders











