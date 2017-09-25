import { Action } from '@ngrx/store';

import { Cipher } from '../types';


export const START_GAME = 'START_GAME';
export const startGameAction = () => ({ type: START_GAME });

export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGameAction = () => ({ type: START_NEW_GAME });

export const START_LAST_GAME = 'START_LAST_GAME';
export const startLastGameAction = () => ({ type: START_LAST_GAME });

export const RESUME_GAME = 'RESUME_GAME';
export const resumeGameAction = (gameId: string) => {
  return {
    type: RESUME_GAME,
    payload: gameId
  };
};

export const GAME_IN_PROGRESS = 'GAME_IN_PROGRESS';
export const gameInProgressAction = () => ({ type: GAME_IN_PROGRESS });

export const GAME_OVER = 'GAME_OVER';
export const gameOverAction = () => ({ type: GAME_OVER });

export const PLAYER_TURN = 'PLAYER_TURN';
export const playerTurnAction = (cipher: Cipher) => ({
  type: PLAYER_TURN,
  payload: cipher
});

export const WAITING_FOR_AI = 'WAITING_FOR_AI';
export const waitingForAiAction = () => ({ type: WAITING_FOR_AI });

export const WAITING_FOR_PLAYER = 'WAITING_FOR_PLAYER';
export const waitingForPlayerAction = () => ({ type: WAITING_FOR_PLAYER });
