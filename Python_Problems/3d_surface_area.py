# Madison, is a little girl who is fond of toys. Her friend Mason works in a toy manufacturing factory . Mason has a 2D board  of size  with  rows and  columns. The board is divided into cells of size  with each cell indicated by it's coordinate . The cell  has an integer  written on it. To create the toy Mason stacks  number of cubes of size  on the cell .

# Given the description of the board showing the values of  and that the price of the toy is equal to the 3d surface area find the price of the toy.

# image

# Input Format

# The first line contains two space-separated integers  and  the height and the width of the board respectively.

# The next  lines contains  space separated integers. The  integer in  line denotes .

# Constraints

# Output Format

# Print the required answer, i.e the price of the toy, in one line.

def surfaceArea(A):
    surf = 0
    for i in range(len(A)):#for list in list.
        for e in range(len(A[i])):#for cell in list.
            c = A[i][e]
            s = (c*4)+2
            
            if i > 0:#left side limit.
                s -= min(c,A[i-1][e])*2
            if e > 0:#upper limit.
                s -= min(c,A[i][e-1])*2
                
            surf += s
            
    return surf