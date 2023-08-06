# implementing a loop in shell is similar to other programing languages
# you efine a variable that will ierate through the loop and specify what
# heapens to that variable
# $ for filename in file_1.txt file_2.txt file_2.txt
# > do
# >    echo $filename
# > done
# the '>' sign means that we are not done typing a command in shell. You can
# use ';' to separate two commands in the same line
# the '$' next to a text signifies that shell should consider it a variable

# you can use wildcards to get the list that you want to iterate into
# $ for filename in *.txt

# if determine the value of a variable and you write just "$variable"
# in the shell command line, it will try to run what is in the variable like
# it was a command

# watch out for spaces in file names. If you need to work with them, then use
# double quotes to specify it's whole name

# you can use "{}" to delimit varible names. $variable will be equal to 
# ${variable}

# you can use echo to check how the commands inside a loop will be for each
# iteration(checking the loop variable value)

# you can use CTRL+A to go to the beggining of a file and CTRL+E to go the 
# end of it

# you can see the history of commands you typed with the command "history"
# you can also get the last commands by pyping it with tail
# $ history | tail -n 5
# and using "!command_number" to repeat the command of the number you want
# $ !406

# command shortcuts:
#
# Ctrl+R enters a history search mode ‘reverse-i-search’ and finds the most
# recent command in your history that matches the text you enter next.
# Press Ctrl+R one or more additional times to search for earlier matches.
# You can then use the left and right arrow keys to choose that line and
# edit it then hit Return to run the command.
#
# !! retrieves the immediately preceding command (you may or may not find
# this more convenient than using ↑)
#
# !$ retrieves the last word of the last command. That’s useful more often
# than you might expect: after 
# $ bash goostats.sh NENE01729B.txt stats-NENE01729B.txt
# , you can type less !$ to look at the file stats-NENE01729B.txt, which is
# quicker than doing ↑ and editing the command-line.

# you can do nested loops by chaining two or more fors
# $ for filename in *.txt
# > do
# >    for variable in 1 2 3
# >    do
# >        echo $filename $variable
# >    done
# > done















