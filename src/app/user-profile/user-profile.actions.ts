import { Action } from '@ngrx/store';
import { User } from '../types';

export const LOGIN = 'LOGIN';
export const loginAction = () => ({ type: LOGIN });

export const LOGOUT = 'LOGOUT';
export const logoutAction = () => ({ type: LOGOUT });

export const USER_HAS_LOGGED_IN = 'USER_HAS_LOGGED_IN';
export const userHasLoggedInAction = (payload: User) => ({ type: USER_HAS_LOGGED_IN, payload });

export const USER_HAS_LOGGED_OUT = 'USER_HAS_LOGGED_OUT';
export const userHasLoggedOutAction = () => ({ type: USER_HAS_LOGGED_OUT });
