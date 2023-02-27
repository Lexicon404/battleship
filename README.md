# battleship
Initial Thought Process:

Ship factory function:
Creates ship object when function is called
Ship contains public properties of name, hit, isSunk
Ship contains private properties of location and health

Gameboard factory function:
Creates player game board when function is called
Setup grid for game board
Public properties: receiveAttack, setShip, checkRemaining
Private properties: shipLocation, playerInv

Player factory function:
Public properties: name, turn, attack
