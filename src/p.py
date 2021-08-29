import os
import sys

def prettier(dir, tab_width):
    """ """
    os.system("prettier --tab-width {} --write {}".format(tab_width, dir))


if __name__ == "__main__":
    if len(sys.argv) == 3:
        prettier(sys.argv[1], sys.argv[2])
    elif len(sys.argv) == 2:
        prettier(sys.argv[1], 4)
    else:
        prettier(".", 4)