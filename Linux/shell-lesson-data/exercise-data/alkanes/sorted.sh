# Sort files by their lenght
# Usage: bash sort.sh one_or_more_file_names
wc -l "$@" | sort -n
