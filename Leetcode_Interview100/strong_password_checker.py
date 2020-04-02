# A password is considered strong if below conditions are all met:

# It has at least 6 characters and at most 20 characters.
# It must contain at least one lowercase letter, at least one uppercase letter, and at least one digit.
# It must NOT contain three repeating characters in a row ("...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).
# Write a function strongPasswordChecker(s), that takes a string s as input, and return the MINIMUM change required to make s a strong password. If s is already strong, return 0.

# Insertion, deletion or replace of any one character are all considered as one change.




class Solution:
    def strongPasswordChecker(self, s: str) -> int:
      aa1aa1aa1aa1aa1aa1aa|aa     a1aAaa  aa1aa1U   
      # Define a variable called count which keeps track of our number of changes we need to make
      # Separate counters for case sensitivity, triples, digit
      # Subarrays for uppercase, lowercase, and number

      # Define a function that checks if the string is in the proper length range
        # If string is less than 6, increment counter by that difference
        # If the string is more than 20, increment counter by that difference

      # Loop through the string
        # Call ASCII function and send s[i] to the function
        # Init a subarray
        # If s[i], s[i+1], s[i+2] exist, append s[i], s[i+1], s[i+2] to subarray
        # Call triple checker and pass it the subarray as param

        'bC2aa1aajfkjdktusnaaa'
  

      # Define a function that checks ascii values of each digit in the String
        # If param is between ascii 65-90, increment uppercase counter, append param to subarray
        # If param is between ascii 97-122, increment lowercase counter, append param to subarray
        # If param is between ascii 48-57, increment number counter, append param to subarray

      # Define a function that checks whether there are 3 or more repeating chars in the String
        # If param[0] == param[1] == param[2]
          # Increment the counter




# A password is considered strong if below conditions are all met:

# It has at least 6 characters and at most 20 characters.
# It must contain at least one lowercase letter, at least one uppercase letter, and at least one digit.
# It must NOT contain three repeating characters in a row ("...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).
# Write a function strongPasswordChecker(s), that takes a string s as input, and return the MINIMUM change required to make s a strong password. If s is already strong, return 0.

# Insertion, deletion or replace of any one character are all considered as one change.