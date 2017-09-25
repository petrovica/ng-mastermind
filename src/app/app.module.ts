import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/never';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/race';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appRoutes, AuthenticatedUserCanActivate } from './app.routes';
import { AppComponent } from './app.component';
import { CipherSelectorComponent } from './game-view/cipher-selector/cipher-selector.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { entityRepositoryReducer } from './entity-repository/entity-repository.reducer';
import { EntityRepositoryService } from './entity-repository/entity-repository.service';
import { gameViewReducer } from './game-view/game-view.reducer';
import { GameViewEffects } from './game-view/game-view.effects';
import { GameViewComponent } from './game-view/game-view.component';
import { GameViewContainerComponent } from './game-view/game-view.container';
import { leaderboardReducer } from './leaderboard/leaderboard.reducer';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LeaderboardContainerComponent } from './leaderboard/leaderboard.container';
import { LeaderboardEffects } from './leaderboard/leaderboard.effects';
import { LeaderboardResolver } from './leaderboard/leaderboard.resolver';
import { LoadingSpinnerComponent } from './game-view/loading-spinner/loading-spinner.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { onlineUsersReducer } from './online-users/online-users.reducer';
import { OnlineUsersComponent } from './online-users/online-users.component';
import { OnlineUsersContainerComponent } from './online-users/online-users.container';
import { OnlineUsersEffects } from './online-users/online-users.effects';
import { RatingComponent } from './game-view/rating/rating.component';
import { SelectedCipherComponent } from './game-view/selected-cipher/selected-cipher.component';
import { userProfileReducer } from './user-profile/user-profile.reducer';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileContainerComponent } from './user-profile/user-profile.container';
import { UserProfileEffects } from './user-profile/user-profile.effects';


@NgModule({
  declarations: [
    AppComponent,
    CipherSelectorComponent,
    ConfirmationModalComponent,
    GameViewComponent,
    GameViewContainerComponent,
    LeaderboardComponent,
    LeaderboardContainerComponent,
    LoadingSpinnerComponent,
    MainMenuComponent,
    OnlineUsersComponent,
    OnlineUsersContainerComponent,
    RatingComponent,
    SelectedCipherComponent,
    UserProfileComponent,
    UserProfileContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),

    StoreModule.forRoot({
      userProfile: userProfileReducer,
      entityRepository: entityRepositoryReducer,
      leaderboard: leaderboardReducer,
      game: gameViewReducer,
      onlineUsers: onlineUsersReducer
    }),

    EffectsModule.forRoot([
      UserProfileEffects,
      LeaderboardEffects,
      GameViewEffects,
      OnlineUsersEffects,
    ]),

    StoreDevtoolsModule.instrument({ maxAge: 50 })
  ],
  providers: [
    AuthenticatedUserCanActivate,
    EntityRepositoryService,
    LeaderboardResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
