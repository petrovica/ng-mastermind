/*



  You can either implement whole GameView in this component or split it into smart (game-view.container.ts) & dumb component (this file).
  If you want to split it, you can get an inspiration in `master` branch of this Git repo.

  How to start a game:
   - in main menu click on Start Game
   - this should dispatch START_GAME action
    - GameView effect should listen for START_GAME action and get response from `backendApi.isGameInProgress()`
      (returns Promise that resolves to boolean; true - there's unfinished game; false - there's no unfinished game)
    - if there's no game in progress call `backendApi.startGame()`

    - if there is game in progress, show to user ConfirmationModal
      (with question `Do you want to continue in last game?` and answers `Yes` or `Play new game`)
      - if user wants to play new game -> call `backendApi.deleteActiveGame()` and then you can start new game with `backendApi.startGame()`
      - if user want to continue with last game, you don't need to do anything

    - now there is game in progress, get it by calling `backendApi.getActiveGame()`
    - store the game to GameView state (by dispatching ACTIVE_GAME event with the game as a payload)


  How to play a game:
   - select cipher in the cipher selector on the top
   - submitting the cipher should dispatch new action PLAYER_TURN with the guess as a payload
   - dispatch WAITING_FOR_AI action to show loader
   - send the payload to server by calling `backendApi.playerGuess(guess)`
   - game state on the server has changed after you submitted new guess, get updated data from the server with `backendApi.getGame(currentGame.id)`
   - save game data to store again (ACTIVE_GAME action) and if game is over (`game.over === true`), game ended
   - dispatch WAITING_FOR_PLAYER action to hide loader
   - if game not ended, play another round by selection cipher in the cipher selector and sumit it



*/
