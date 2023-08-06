# pwd(print working directory): shows the path to where the shell is curently located.
# when you run a shell command without specifying a folder path it will most likely
# run in the current directory

# ls -F indicates if and item if a folder(ends with /), executable(ends with *)
# or a link(ends with @)

# another way to know if the item is a file or folder(in xubuntu) is check for the
# color(blue for folders, white for files)

# to clear the terminal from previous commands, you can type the clear command

# to navigate to previous commands you can use the up arrow and down arrow keys
# or scroll in the terminal

# typing --help after a command will help you to know what it does as well as it's
# options
# $ ls --help
# $ cd --help

# you can also use man before a command to read it's manual(documentation)
# $ man ls

# when trying to use an option that doesn't exist for the command, the shell
# will display a message like this:
# $ ls -j
# ls: invalid option -- 'j'
# Try 'ls --help' for more information.

# to search for a unix shell command, is besto to also type "unix man page" to
# facilitate the search

# you can combine options by typing them one afther the other with no spaces afeter
# the "-"
# ex.
# $ ls -tlr

# assuming that you are in the /home/ directory, you can use ls -F Desktop to
# list the contents of the Desktop, specifiyng the type of the content
# $ ls -F Desktop
# you can also add subfolders of the Desktop to know what is inside of them
# $ ls -F Desktop/shell-lesson-data

# cd(change directory): changes the current working directory to the one
# specified after the command. You can specify the full path of the directory
# or the path relative to the current working directory
# $ cd Desktop
$ $ cd shell-lesson-data/exercise-data
# to go up a directory, you can use "$ cd .."

# to display the directory that contains the current directory, you can use
# the following command:
# $ ls -F -a
# which will display the current workingdirectory("./"), the directory above
# ("../") and the subdirectories of the current directory

# by typing "$ cd" without a directory path, the shell will go to the home 
# directory, in my case "/home/pedro"

# a way to include the home directory in the absolute path of cd is to use 
# '~' at the begginig of the path. That way you dont need to specify the path
# to the home directory.
# ex.
# $ cd /home/pedro/Desktop/
# will be the same as
# $ cd ~/Desktop/

# way to go back to the previous directory is to use '-' after cd. That way
# you can go back and forth between the previous directory and the current one
# $ cd -

# "$ ls -s" will show the contents of the working directory as well as their
# size, while "$ ls -S" will show the contents of the file in ascending order
# of size

# the options of a command can sometimes be written in a long format. "-F" for
# example can be written as "--classify", "--file-type", "--format=WORD"(where)
# WORD will be the way the contents will be presented) and "--full-time". It
# is best to use the short format for options when working in the shell 
# directly and use the long format for your scripts to add clarity

# you can auto complete a command by pressing TAB in your keyboard after 
# typing a few letters of the command.
# pressing TAB twice can give you te option of what the command can do. Like
# in "$ ls " after pressing tab twice the shell will show you the filesg in 
# the current directory
























