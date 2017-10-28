import { Observable } from 'rxjs/Observable';
import { Player } from '../models/Player';
import { PlayerDetails } from '../models/PlayerDetails';
import 'rxjs/add/observable/of';

export class MockStatisticsService {

    getPlayerList(): Observable<Player[]> {
      return Observable.of([
        {id: 1627773, name: 'AJ Hammons', teamname: 'DAL', age: 24},
        {id: 202329, name: 'Al-Farouq Aminu', teamname: 'POR', age: 26},
        {id: 201980, name: 'Danny Green', teamname: 'SAS', age: 30},
        {id: 1626156, name: 'D Angelo Russell', teamname: 'LAL', age: 21}
      ]);
    }

    getPlayer(): Observable<PlayerDetails[]> {
      return Observable.of(
        [{ name: 'Test', surname: 'Player', dateofbirth: '1988-05-06T00:00:00' }]
      );
    }
}
