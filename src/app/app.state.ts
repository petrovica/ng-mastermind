import { UserProfile } from './user-profile/user-profile.reducer';
import { EntityRepository } from './entity-repository/entity-repository.reducer';
import { Leaderboard } from './leaderboard/leaderboard.reducer';
import { GameView } from './game-view/game-view.reducer';
import { OnlineUsers } from './online-users/online-users.reducer';

export interface AppState {
  userProfile: UserProfile;
  entityRepository: EntityRepository;
  leaderboard: Leaderboard;
  game: GameView;
  onlineUsers: OnlineUsers;
}
