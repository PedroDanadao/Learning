# the command mkdir(make directory) creates a new directory in the current 
# folder or in a folder specified by the full path
# $ mkdir file_name
# $ mkdir path/to/file_name
# you can also create more than one directory using the -p option
# $ mkdir -p new_dir1/new_dir2 new_dir1/new_dir3

# the -R option of the "ls" command will list all nested subdirectories 
# within a directory
# $ ls -R

# tree tips for folder and file names: 
# don't user spaces(use - or _ isntead),
# dont begin the name with -
# stick with letters, numbers, .(dot), -(dash) and _(underscore)

# if you are dealing with a folder or file that has a space in it, then use
# quotation marks("") for the path
# $ ls "file name"

# the command "nano" folowed by a text file name will open the nano
# text editor of linux(which is a very simple one). From there you can save
# the file with "ctrl+o"
# $ nano text_file.txt

# the command "touch" followed by a file name will create an empty file of 
# the specified type without having to open the file first
# $ touch my_file.txt

# the command "rm" will delete a specified file(it doesn't work with folders)
# $ rm my_file.txt

# although the file extension of a file is very important, it is also just a 
# convension. You can replace the ".mp3" of a file to ".txt" and still open
# it with an mp3 player program. But it is best to have the right extension 
# for the files to inform your computer what program should try to open the
# file

# the command "mv"(move) can move a file to a diferent place when you specify
# the current path of the file and the new path of the file
# $ mv my_file.txt ../my_file.txt (will move my file to a directory above)
# it can also be used to rename a file when moving it or keeping it in the
# same place
# $ mv old_file_name.txt new_file_name.txt
# have in mind that if you want to move a file to a location that already has
# one with it's name, then the command will overwrite the contents of the
# original file
# mv also moves directories
# if you do't specify the file name in the secod argument, then mv will keep
# the file name
# $ mv file.txt new_folder/

# the command cp(copy) will copy a file to another file path. It works similar
# to the "mv" command, in which you must pass two arguments, the current path
# of the file and the path of the copy
# $ cp file.txt subfolder/file.txt
# you can also use the -r option to copy a folder with all it's contents to 
# a new folder location
# $ cp -r folder folder_copy

# you can remove files with the command rm followed by the file that you want
# to remove
# $ rm file.txt
# be aware that the deleted file will be deleted forever, instead of going
# to the trash bin
# the -i opton will ask beforedhand if you want to delete the file or not.
# you can confirm by typing 'y' or cancel with 'n'
# $ rm -i file.txt
# $ rm: remove regular file 'file.txt'?
# you can't remove a directory with just the "rm" command. For that you need
# to add the option -r(recursive). rmdir only works on empty directories
# $ rm -r folder/
# be carefull with "rm -r" though, since it deletes the whole folder with it's
# files and subfolders. It might be best to add the -i option to it and be 
# sure that the user realy wants to delete it
# $ rm -ri folder/
# $ rm: descend into directory 'folder/'? y
# $ rm: remove regular file 'folder/file.txt'? y
# $ rm: remove directory 'folder/'? y

# you can use wildcards to copy or move several files
# $ cp new*.txt folder/
# $ mv *.txt folder/




















