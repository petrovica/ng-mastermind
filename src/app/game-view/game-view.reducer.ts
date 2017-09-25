import { ActionWithPayload } from './../types';
import {
  GAME_IN_PROGRESS,
  RESUME_GAME,
  START_GAME,
  START_LAST_GAME,
  START_NEW_GAME,
  WAITING_FOR_PLAYER,
  WAITING_FOR_AI
} from './game-view.actions';

export interface GameView {
  activeGameId: string;
  aiTurn: boolean;
  resumeModalVisible: false;
}

const initialState: GameView = {
  activeGameId: null,
  aiTurn: false,
  resumeModalVisible: false
};

export function gameViewReducer(state: GameView = initialState, action: ActionWithPayload) {
  switch (action.type) {
    case GAME_IN_PROGRESS:
      return { ...state, resumeModalVisible: true };

    case START_GAME:
      return { ...state, activeGameId: null };

    case START_LAST_GAME:
    case START_NEW_GAME:
      return { ...state, resumeModalVisible: false };

    case RESUME_GAME:
      return { ...state, activeGameId: action.payload };

    case WAITING_FOR_PLAYER:
      return { ...state, aiTurn: false };

    case WAITING_FOR_AI:
      return { ...state, aiTurn: true };

    default:
      return state;
  }
}
