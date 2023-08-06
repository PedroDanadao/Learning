# you can create shell scripts with the nano command and setting their 
# extension to .sh(for clarity)
# $ nano script_file.sh
# then you can run the script with the bash command
# $ bash script.sh

# you can use the "$1" variable inside the shell script to get the value from
# the terminal when calling the bash command
# $ bash script.sh file.txt(the $1 in the shell script will have the value
# file.txt)
# it is best to surrond the $1 variable in double quotes("") inside the script
# $ "$1"

# other variables that you want to get from the bash command call can be named
# with the numbers after 1
# $ "$1" "$2" "$3" ...
# the arguments will match the order that you specified when calling the 
# command
# $ bash script.sh first_arg second_arg third_arg

# you can add comments to the script file with the character 
# "#"(like in python)

# you can use "$@" to splecify a variable that can have several values, like
# when you use a wildcard for a command
# $ echo "$@"
# $ bash script.sh *.txt

# you can pass a wild card as an argument to a script if you enclose it in 
# quotes '*,txt'

# you can add the option -x to the command bash to try to debug your scripts












