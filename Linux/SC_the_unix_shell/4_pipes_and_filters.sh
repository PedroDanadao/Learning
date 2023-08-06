# wc(word count) counts the number of lines, words and characters of a file(in 
# that order)
# $ wc file.txt
# $ 20 156 1158 file.txt
# you can specify more than one file to be checked by typing the files or
# using wildcards
# $ wc file_1.txt file_2.txt
# $ 30 240 1820  file1.txt
# $ 15 110  820  file2.txt
# $ 45 350 2640  total
# the option -l of wc will only show the number of lines of a file
# $ wc file.txt
# $ 20 file.txt

# if you are stuck in a command(like if you type "wc -l" and pressing enter) 
# then you can use CTRL+C to escape from this state

# you can redirect the uotput from that would be printed in the shell to a file
# with the "greater then" symbol(>)
# $ wc file > count.txt
# it will create the count.txt file if doesn't exist or 

# the "cat" command will concatenate the contents of the specified files and
# print them. If only one file is specified then the contents of just one 
# file will be printed
# $ cat file.txt
# $ this is what is written in file.txt
# the command cat will allways show the whole content of the specified files
# at once. If you want to show a portion of the contents and continue reading
# as you go. Then you can use the command "less". To go forwar one screen
# use "spacebar", to go back one screen use 'b' and to quit reading use 'q'

# the command "sort" can sort the contents of a file and display it based on
# the alphabetical order. You can use the option -n to sort it in numerical
# order
# $ sort file1.txt
# $ 1. alter
# $ 11. beast
# $ 2. red
# $ sort -n file1.txt
# $ 1. alter
# $ 2. red
# $ 11. beast

# the command "head" will print the first 10 lines of the specified files. 
# You can change the number of lines to be displayed with the option 'n'
# $ head -n 3 file.txt
# $ first line
# $ second line
# $ third line

# the "echo" command will print in the screen
# $ echo hello world
# $ hello world

# if you want to concatenate to the contents  of a previously created file,
# you can use ">>". That way it wont overwrite the file, but add to it.

# "tail" works the oposite way of "head". It prints the final 10 lines of a
# file and you are able to specify the number of files with the option 'n'

# you can use the output of one command as the input of another by using the
# vertical bar '|'. That way you don't need to create several files to get
# the wanted output
# $ sort -n file.txt | head -n 1
# will show the first line of the sorted file.txt
# '|' is also colled pipe

# the cut command is used to cut out sections of an input by the TAB key. If
# you prefer you can specify another delimiter like ',' using the -d option.
# another thing you can do is specify which column you want to take with the
# -f option
# $ cut -d , -f 2

# the uniq command is used to filter out adjacent lines that are equal to 
# each other. So it can be used in conjunction with the sort command to
# remove lines that repeat themselves in the input
# it also has a -c option that counts the number of times a line appears in
# the input(it will still remove adjacent lines in the output)
# $ uniq -c



















