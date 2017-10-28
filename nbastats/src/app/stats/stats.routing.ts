import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player/player.component';

const statsRoutes: Routes = [
  { path: 'stats', component: PlayerListComponent },
  { path: 'player/:id', component: PlayerComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(statsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StatsRouting { }