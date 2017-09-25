import { Game } from '../types';

export const LOAD_LEADERBOARD = 'LOAD_LEADERBOARD';
export const loadLeaderboardAction = () => ({ type: LOAD_LEADERBOARD });

export const LEADERBOARD_FETCHED = 'LEADERBOARD_FETCHED';
export const leaderboardFetchedAction = (bestGameIds: string[]) => ({
  type: LEADERBOARD_FETCHED,
  payload: bestGameIds
});
