# Takes a directory path and a file extension and prints the file with the
# most lines from that directory with that file extension
wc -l $1/*.$2 | sort -nr | head -n 2 | tail -n 1
