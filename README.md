# Overview

This project was done as part of The Odin Project curriculum (theodinproject.com). It was designed to practice JS unit testing with Jest. Due to the testing and the lack of a framework, it was also an opportunity to practice good code organization and separation of responsibilities.

The app is an implementation of the classic board game Battleship, with the user playing against the computer.

# Features

At the start of the game, the user places ships on the board by clicking on the endpoint positions. The app calculates which positions are possible as start and end positions, and only allows the user to choose legal endpoints. During this process, the user can opt to redo previous positionings.

The app uses an (imperfect) AI to supply the computer's moves. The AI chooses random positions until it gets a hit. It then attacks each of the adjacent positions until a second hit is obtained. At that point, the orientation of the ship is clear, and the AI chooses one of the two possible adjacent points, and so on until the ship is sunk. If the orientation becomes clear at any point before the second hit is obtained (e.g., due to neighboring hits/misses), the opposite pair of corresponding adjacent positions is eliminated.



