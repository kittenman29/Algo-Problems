# Read in one character from the user (this may be 'Y', 'y', 'N', 'n'). If the character is 'Y' or 'y' display "YES". If the character is 'N' or 'n' display "NO". No other character will be provided as input.

# Input Format

# One character (this may be 'Y', 'y', 'N', 'n').

# Constraints

# -

# Output Format

# One word: either "YES" or "NO" (quotation marks excluded).

# Sample Input

# Sample Input 1

# y  
# Sample Output

# Sample Output 1

# YES


read x

if [[ $x == "Y" || $x == "y" ]]
then
    echo "YES"
else
    echo "NO"
fi
