import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsRouting } from './stats.routing';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  imports: [
    CommonModule,
    StatsRouting
  ],
  declarations: [
    PlayerListComponent, 
    PlayerComponent
  ]
})
export class StatsModule { }
