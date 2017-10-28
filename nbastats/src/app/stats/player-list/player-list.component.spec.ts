import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { PlayerListComponent } from './player-list.component';
import { StatisticsService } from '../services/statistics.service';
import { Player } from '../models/Player';
import { Observable } from 'rxjs';
import { MockStatisticsService } from '../services/statistics.service.mock';

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;
  let service: StatisticsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        PlayerListComponent
      ],
      providers: [
        { provide: StatisticsService, useClass: MockStatisticsService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate 4 players to players array on init', () => {
    expect(component.players.length).toEqual(4);
  });
});
