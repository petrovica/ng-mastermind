import { GAME, GUESS, RATING } from './../entities';
import { schema } from 'normalizr';

import * as Entities from '../entities';

const GameSchema = new schema.Entity(Entities.GAME);
const UserSchema = new schema.Entity(Entities.USER);
const GuessSchema = new schema.Entity(Entities.GUESS);
const RatingSchema = new schema.Entity(Entities.RATING);

GameSchema.define({
  user: UserSchema,
  guesses: new schema.Array(GuessSchema),
  ratings: new schema.Array(RatingSchema)
});

// Can't get this to work
// const Schema = {
//   [Entities.USER]: UserSchema
const Schema = {
  USER: UserSchema,
  GAME: GameSchema,
  GUESS: GuessSchema,
  RATING: RatingSchema
};

export default Schema;
