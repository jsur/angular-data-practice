import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { Player } from '../models/Player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];

  constructor(private stats: StatisticsService) { }

  ngOnInit() {
    this.stats.getPlayerList()
      .subscribe(
        data => this.players = data,
        err => console.log('show error in ui somehow.')
      )
  }

}
