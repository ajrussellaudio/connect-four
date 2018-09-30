# Connect Four Coding Challenge

The brief for this coding challenge was simple:

> Using tests to prove your logic, write a function to detect a win condition in Connect Four. The function should accept an array of arrays representing a board, and return the winning colour and the coordinates of the winning line.

An example of a Connect Four board was given:

```
  [ ][ ][ ][ ][ ][ ][ ]  
  [ ][ ][ ][ ][ ][ ][ ]  
  [ ][ ][ ][ ][R][ ][ ]  
  [ ][ ][ ][R][Y][Y][ ]  
  [ ][ ][R][Y][R][Y][ ]  
  [ ][R][Y][Y][R][Y][R]
```

With a description of the expected output for the above:

> Your function should return ‘R’ and an array containing the coordinates (0,1), (1,2), (2,3), (3,4) – the order is not important.
>
> Note, the coordinates of the board should be expressed as (row, column), where the bottom row has index 0 and the leftmost column has index 0, e.g. the bottom-left cell has coordinates (0,0)

Three acceptance criteria were identified:

- The function should accept an array of arrays representing a board
- The function should return the winning colour
- The function should return the coordinates of the winning line

## An array of arrays

The first item is a tough one to check for. It's easy enough to write a test that verifies the _output_ of a function, but less easy and probably less useful to verify the _input_.

But in this situation, the example grid had been given as a block of monospaced text. It would be useful to have a function that could turn this text into a JavaScript array of arrays.

The `makeBoard` function was written and tested to do this task. This meant that further example grids could be defined in text as very readable strings, and used as test cases. These can be found in `specs/testBoards.js`.

## Winning conditions

I identified at first three winning conditions: a horizontal 4-in-a-row, a vertical 4-in-a-row and a diagonal 4-in-a-row. I decided that the best solution from an architectural point of view would be to have the main `checkWin` function delegate to a separate function for each of these conditions; `checkVerticalWin`, `checkHorizontalWin` and `checkDiagonalWin`. If any of these functions returned `true`, then `checkWin` would pass that to its own return, otherwise `checkWin` would return `false`.

I wrote some tests and implemented these functions.

At this point I had painted myself into a corner, where the function could tell whether the game was won or not by iterating over the board, but in order to report which colour won and where, it would have to iterate over the board again.

I arrived at a better solution where, rather than returning a boolean `true` or `false`, these functions would instead return an object containing the winning colour and coordinates. If no win was found, these functions would then return `null` or `undefined`, which are treated as falsy in JavaScript. The original logic of the `checkWin` function was therefore still valid; it would just return an object, rather than a boolean value.

The horizontal win checking function is the simplest. It loops through each row of the board, then through each cell in the row. It checks that this cell is not `null` (empty) and is identical to the next three cells. If these conditions are met, it populates an object with the colours of the cell and the coordinates of the cells it just evaluated.

The vertical win function is very similar, but transposes the 2D array of rows so that it can loop through every column, performing the same check.

The diagonal win function started out similarly too, but I realised that it would be easier to check for a condition where the winning diagonal row went upwards (left to right) separately from where it went downwards. And so these functions were separated, making four separate win conditions.

## Default details

Each win condition was tested, but there was still a condition where there was no winning 4-in-a-row on the board. In a real-world game, turns are probably taking place in a loop, with the `checkWin` being called every loop. And since not every turn will result in a win, the `checkWin` function should give predictable results when neither player has won.

I decided that in this case, the object returned should still have the same `{ colour, coords }` shape, but that both values should be `null`.

## Refactoring

Once all that was implemented, the `checkWin.js` module had become pretty heavy. To bring its size down, I abstracted out the functionality of checking that four cells were identical and not `null`. I realised that from this function's point of view, there were only two winning conditions: an array of four `'R'` strings, and an array of four `'Y'` strings. Everything else was not a win. So I altered this functionality by joining the four cells and comparing them to strings `'RRRR'` and `'YYYY'`.

I also made use of the Lodash library when calculating the coordinates of winning lines. Rather than filling an array with the coordinates manually, I was able to use the library's `zipWith` and `range` functions to fill the coordinates array programmatically. The fact that I already had passing tests was a big help here.

Finally I pulled each delegated function out of the `checkWin.js` file and into its own module. This "revealing module" pattern is very useful in a bigger project, but doesn't do much here other than keep every file of manageable length.
