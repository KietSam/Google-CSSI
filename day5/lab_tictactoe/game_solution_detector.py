#!/usr/bin/env python

"""
Someone else has written a game.  Your job is to write some functions to see
whether or not the game has been won, and who won.

The board arrives looking something like this:
  [[0,0,1,0],
   [0,0,1,0],
   [0,2,1,0],
   [0,2,2,2]]
It's a 2-dimensional list (a list of lists) and each 'square' is a number.

People win by having 3 of their numbers (0, 1, or 2, for example) in a row.

They can win by a vertical row, a horizontal row or a diagonal row.  The
board can be in a state where multiple people have won at the same time, and
it's a draw.

If you run this python file, you'll see a bunch of failed test cases, because
you haven't filled in the code yet!  As you start to fill in the code, some
of those test cases will pass.  Once you're done, all of the test cases
will pass!
"""

# Global variable:
# How many consecutive squares need to be occupied for a 'win'.
# By using this variable instead of 3, we can change the rules of the game
# by just changing our code in one single spot.
CONSECUTIVE = 3


def CheckForHorizontalWinners(grid):
  """Returns a set of any horizontal winners of the grid.

  set([0]) means that 0 has at least CONSECUTIVE 0s in a horizontal line.
  set([1, 2]) means both 1 and 2 have CONSECUTIVE numbers in a horizontal line.

      000 <-- Example of a horizontal win of size 3

  Hint: For each row in the grid, check if that row has any wins.
  """
  winners = set()
  # width
  max_x = len(grid[0])
  # height
  max_y = len(grid)
  ##### INSERT YOUR CODE HERE #####
  for y in range(max_y):
    for x in range(max_x):
        counterHorizontal = 0
        counterVertical = 0
        for z in range(CONSECUTIVE):
            if (x+z) < max_x:
                if grid[y][x] == grid[y][x+z]:
                    counterHorizontal+=1
            if (y+z) < max_y:
                if grid[y][x] == grid[y+z][x]:
                    counterVertical+=1
        if counterHorizontal == CONSECUTIVE or counterVertical == CONSECUTIVE:
            winners.add(grid[y][x])
  return winners

def CheckForDiagonalWinners(grid):
  """Returns a set of any diagonal winners of the grid.

  Remember that there are many diagonals on any grid.

    01
     01  <-- both 0 and 1 got a diagonal of size 3
      01

  Don't forget diagonals in both directions: / and \

  This is the hardest of the three checks, so DO THIS ONE LAST.
  """

  ##### INSERT YOUR CODE HERE #####
  # max_x is the size of the grid's x-axis: how wide the grid is
  max_x = len(grid[0])
  # max_y is the size of the grid's y-axis: how tall the grid is.
  max_y = len(grid)
  winners = set()
  for y in range(max_y-max_y%CONSECUTIVE-1):
      for x in range(max_x - (max_x%CONSECUTIVE)-1):
          if grid[y][x] == grid[y+1][x+1] and grid[y][x] == grid[y+2][x+2]:
              winners.add(grid[y][x])

  for y in range(max_y-max_y%CONSECUTIVE-1):
    for x in range(max_x - (max_x%CONSECUTIVE)-1):
        if grid[y][max_x-x-1] == grid[y+1][max_x-x-2] and grid[y][max_x-x-1] == grid[y+2][max_x-x-3]:
            winners.add(grid[y][max_x-x-1])

  return winners


def DetectWinners(grid):
  """Check a grid for any horizontal, vertical or diagonal winners."""
  h_winners = CheckForHorizontalWinners(grid)
  d_winners = CheckForDiagonalWinners(grid)
  return h_winners.union(d_winners)


def test_grid(error_msg, grid, expected):
  """Run a test case for the grid and print if we get an unexpected value."""
  result = DetectWinners(grid)
  if result != expected:
    print "FAIL(%s): expected %s but got %s" % (error_msg, expected, result)
  else:
    print "PASS(%s)" % (error_msg)


def run_testcases():
  test_grid("No winners",
            [[0,1,0,1],
             [1,2,1,2],
             [0,2,0,2],
             [1,1,2,1]],
            set([]))
  test_grid("Basic horizontal check",
            [[1,1,1,0],
             [0,1,0,1],
             [0,2,0,2],
             [1,2,1,2]],
            set([1]))
  test_grid("Multiple horizontal check",
            [[0,1,0,1],
             [0,1,1,1],
             [2,2,2,0],
             [0,1,0,1]],
            set([1,2]))
  test_grid("Basic vertical check",
            [[1,0,2,1],
             [1,2,1,1],
             [1,0,2,0],
             [0,2,1,1]],
            set([1]))
  test_grid("Multiple vertical check",
            [[1,0,2,0],
             [1,2,1,0],
             [1,0,2,0],
             [1,2,1,1]],
            set([0,1]))
  test_grid("Vertical and horizontal check",
            [[1,0,2,0],
             [1,2,2,2],
             [1,0,1,0],
             [1,2,1,2]],
            set([1,2]))
  test_grid("Diagonal \ check",
            [[0,1,0,1],
             [1,2,1,2],
             [0,2,0,1],
             [1,1,2,1]],
            set([1]))
  test_grid("Diagonal / check",
            [[0,1,0,1],
             [1,2,1,2],
             [0,1,0,2],
             [2,1,2,1]],
            set([1]))
  test_grid("Winners everywhere",
            [[0,0,0,1],
             [1,2,1,2],
             [0,1,0,2],
             [2,1,2,2]],
            set([0,1,2]))
  test_grid("Different types of numbers",
            [[0,7,0,1],
             [1,2,8,3],
             [0,1,0,3],
             [2,1,2,3]],
            set([3]))

def main():
  run_testcases()

if __name__ == "__main__":
  main()
