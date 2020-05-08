import csv
from requests import get
from io import BytesIO
from zipfile import ZipFile
from bs4 import BeautifulSoup



page = get("http://www.ercot.com/content/cdr/html/current_np6788")

soup = BeautifulSoup(page.content, 'html.parser')

dix = {}

result = soup.find_all(lambda tag: tag.name == 'td' and tag.get('class') == ['tdLeft'])

i = 0
while i <= len(result)-2:
  unformatted_node = result[i].contents[0]
  node = unformatted_node.strip()
  if node[0].isalpha():
    unformatted_price = result[i+1].contents[0]
    price = unformatted_price.strip()
    dix[node] = price
    i += 1
  else:
    i += 1
    
print(dix)




# from secrets import choice, randbelow
# from datetime import timedelta, date
# import pandas as pd
# import csv
# import time
# import datetime
# import string
# import sys
# import os

# uniques = dict()

# def pricing_func(hi, lo, seg):
#   bid = (hi - lo)/(seg-1)
#   return bid

# def create_id(random_num):
#     alpha_numeric = ''.join([choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for _ in range(random_num)])
#     if alpha_numeric in uniques:
#         return create_id(random_num)
#     else:
#         uniques[alpha_numeric] = True
#         return alpha_numeric

# def create_entropy(x):
#     rando = randbelow(x)
#     if rando < 4:
#         return create_entropy(14)
#     else:
#         return rando


# def func(col):
#     # if "Bid Y/N?", column J, is marked as "Y"
#   if col[9] == 'Y':
#     source = col[0]
#     sink = col[1]
#     hi_bid = col[2]
#     lo_bid = col[3]
#     mw = col[4]
#     seg = int(col[5])
#     mh = col[6]
#     hs = col[7]
#     hf = col[8]
#     interpolation_method = col[11]
#     segments = 0
#     curve_points = 0
#     # create a new variable for the high bid, divided by the number of hours in multi-block bid
#     hi = (hi_bid/(hf-hs+1))
#     # create a new variable for the low bid, divided by the number of hours in multi-block bid
#     lo = (lo_bid/(hf-hs+1))
#     # get the linear decreasing interval
#     bid_interval = pricing_func(hi, lo, seg)

#     # if hs and hf are the same, but it's still checked as a multi-block
#     if hs == hf:
#       # iterate over the rows by range of hours and segments
#       for i in range(seg):
#         segments += 1
#         # create a random number between 4-14
#         rando_numbo = create_entropy(15)
#         # create a random string of a-z, A-Z, 0-9 of length rando_numbo
#         bid_id = create_id(rando_numbo)

#         row_data = ('date', source, sink, hs, bid_id, mw, hi, segments, mh)
#         print(row_data)
#         # create_new_row(source, sink, hi_bid, lo_bid, mw, seg, mh hs, hf)
#         # write_row.writerow(row_data)
#         hi -= bid_interval
#     elif interpolation_method == 'C':
#       hours = hs
#       # iterate over the rows by range of hours and segments
#       for i in range(seg):
#         hours = hs
#         curve_points += (1/seg)
#         segments += 1
#         hi = ((2*curve_points**3-3*curve_points**2+1)*hi+(curve_points**3-2*curve_points**2+curve_points)*(hi-lo)*1.8+(-2*curve_points**3+3*curve_points**2)*lo+(curve_points**3-curve_points**2)*(lo-hi)*.4)
#         while hours < hf+1:
#           # create a random number between 4-14
#           rando_numbo = create_entropy(15)
#           # create a random string of a-z, A-Z, 0-9 of length rando_numbo
#           bid_id = create_id(rando_numbo)
#           row_data = ('date', source, sink, hours, bid_id, mw, round(hi, 2), segments, mh)
#           print(row_data)
#           # create_new_row(source, sink, hi_bid, lo_bid, mw, seg, mh hs, hf)
#           # write_row.writerow(row_data)
#           hours += 1
#         # hi -= bid_interval
#     else:
        


# print(func(['WAKEWE_ALL', 'LZ_NORTH', 456.5, 385, 20, 3, 'Y', 14, 24, 'Y', 'W', 'C']))