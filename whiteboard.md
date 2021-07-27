

# manageDOM



- updateBoard



- displayVictoryMessage


- displayIllegalMessage



# Game

- takeHumanTurn
  0. If victory has been declared, do nothing
  1. If move is illegal, call manageDOM.displayIllegalMessage (TEST)
  2. Call takeTurn

  3. If move is decisive, call declareVictory
  4. If move is not decisive, call takeComputerTurn (TEST ????)

- takeComputerTurn
  1. call getComputerMove
  2. call takeTurn

- takeTurn
  1. Call manageDOM.updateBoard (plus everything else) (TEST)


- declareVictory
  1. call manageDOM.displayVictoryMessage (TEST)
  2. call removeEventListeners (TEST)

