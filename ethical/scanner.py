#!/bin/python3

import sys
import socket
from datetime import datetime

"""This is what we're trying to achieve -
We want to run `python3 scanner.py <ip>` and get a list of all
available ports that are open to us on that ip address"""

#Define our target
if len(sys.argv) == 2:
    target = socket.gethostbyname(sys.argv[1]) #Translate hostname to IPv4
else:
    print("Invalid amount of arguments.")
    print("Syntax: python3 scanner.py <ip>")

#Add a pretty banner
print("-" * 50)
print("Scanning target " + target)
print("Time started: " + str(datetime.now()))
print("-" * 50)

try:
    for port in range(1, 65535):
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        socket.setdefaulttimeout(1)
        result = s.connect_ex((target,port)) #returns an error indicator

        if result == 0:
            print("Port {} is open".format(port))
        s.close()
except KeyboardInterrupt:
    print("\n Exiting program")
    sys.exit()
except socket.gaierror:
    print("Hostname could not be resolved.")
except socket.error:
    print("Couldn't connect to server.")
    sys.exit()