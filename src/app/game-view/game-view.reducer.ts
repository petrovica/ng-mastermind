// START_GAME - start game (erase current game data), if there's already game in progress, open ConfirmationModal
// START_NEW_GAME, START_LAST_GAME - hide ConfirmationModal dialog
// WAITING_FOR_AI - waiting for server (state.aiTurn = true)
// WAITING_FOR_PLAYER - player can play (state.aiTurn = false))

// What we need to store:
//  - active game data (state.game)
//  - if we're waiting for AI turn tu end (state.aiTurn)
//  - if dialog with Start New Game / Resume Game options should be visible
