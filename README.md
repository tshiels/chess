# Simple Chess Engine

<strong>Summary</strong>
<br>

This program plays a Human vs. Computer game of Chess. The progam implements the Minimax algorithm that searches 3 levels deep into the game tree. 
The evaluation function to score the board ranks the relative importance of each piece on the board,
with white and black pieces having equal and opposite point values, and adds the two scores together. 
***

<strong>Dependencies</strong>:
* Python-chess (included) : https://python-chess.readthedocs.io/en/latest/#
  * includes modified board printout 
* Stockfish engine in `/usr/games/` (if using `minimax_stockfish.py`)
***
<strong>Run Instructions</strong>:
* (Requires Python3.6 or greater)
* Original evaluation function:
  * `$ python3 chess_minimax.py`
- Updated evaluation function:
  - `$ python3 chess_minimax.py`
- My engine vs. Stockfish engine at lowest settings:
  - `$ python3 minimax_stockfish.py`
