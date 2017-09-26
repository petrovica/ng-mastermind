import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';

import { MainMenuComponent } from './main-menu/main-menu.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainMenuComponent
  }
];
