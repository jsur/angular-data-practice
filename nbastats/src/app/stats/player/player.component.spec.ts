import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { PlayerComponent } from './player.component';
import { StatisticsService } from '../services/statistics.service';
import { MockStatisticsService } from '../services/statistics.service.mock';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PlayerComponent ],
      providers: [
        { provide: StatisticsService, useClass: MockStatisticsService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate currentPlayer with surname Player', () => {
    expect(component.currentPlayer.surname).toEqual('Player');
  });
});
