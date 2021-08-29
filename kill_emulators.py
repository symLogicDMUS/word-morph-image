import os
import re


def kill_emulators(port_num):
    """ (Windows version)
    netstat -ano | findstr :<port-number>
    taskkill /PID <pid> /F
    """
    os.system("netstat -ano | findstr :{} > temp.txt".format(port_num))
    f = open("temp.txt")
    row = f.readline()
    f.close()
    os.remove("temp.txt")
    columns = re.findall("[^\s]+", row)
    if len(columns) > 0:
        pid = columns[-1]
        # don't attempt to kill import system pid like 0 or 4:
        if len(pid) > 3:
            os.system("taskkill /PID {} /F".format(pid))


if __name__ == '__main__':
    for port_num in [5000, 5001, 8080, 8085, 9000, 9099, 9199]:
        kill_emulators(port_num)