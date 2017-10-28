import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StatsRouting } from './stats.routing';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player/player.component';
import { StatisticsService } from './services/statistics.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StatsRouting
  ],
  declarations: [
    PlayerListComponent, 
    PlayerComponent
  ],
  providers: [
    StatisticsService
  ]
})
export class StatsModule { }
