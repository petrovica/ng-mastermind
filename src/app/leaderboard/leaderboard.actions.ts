
export const LOAD_LEADERBOARD = 'LOAD_LEADERBOARD';
export const loadLeaderboardAction = () => ({ type: LOAD_LEADERBOARD });

export const LEADERBOARD_FETCHED = 'LEADERBOARD_FETCHED';
export const leaderbordFetchedAction = (bestGames) => ({ type: LEADERBOARD_FETCHED, payload: bestGames });
