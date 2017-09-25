export interface ActionWithPayload {
  type: string;
  payload?: any;
}

export interface Cipher {
  0: number;
  1: number;
  2: number;
  3: number;
}

export interface Guess {
  guess: Cipher;
}

export interface Game {
  id: string;
  over: boolean;
  guesses: Guess[];
  ratings: Cipher[];
}

export interface User {
  id: string;
  email: string;
  photo: string;
}


