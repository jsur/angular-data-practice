import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatisticsService } from '../services/statistics.service';
import { PlayerDetails } from '../models/PlayerDetails';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  currentPlayer: PlayerDetails;
  playerId: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private stats: StatisticsService
  ) {
    this.activeRoute.params
      .subscribe(data => this.playerId = data.id);
  }

  ngOnInit() {
    this.stats.getPlayer(this.playerId)
      .subscribe(
        player => {
          this.currentPlayer = player[0];
        },
        err => console.log('show error in ui with a service and a top-level component etc.')
      );
    }

}
