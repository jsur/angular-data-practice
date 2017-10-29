import { StatsPage, PlayerPage } from './stats.po';
import { browser } from 'protractor';

describe('nbastats Stats page', () => {
  let page: StatsPage;

  beforeEach(() => {
    page = new StatsPage();
  });

  it('first player on page should be AJ Hammons', () => {
    page.navigateTo();
    expect(page.getFirstPlayer()).toEqual('AJ Hammons');
  });

  it('there should be 486 players', () => {
    expect(page.getAllPlayers()).toEqual(486);
  });

  it('should show Aaron Gordon\'s first name after click', () => {
    page.clickPlayer();
    expect(page.getPlayerName()).toContain('Aaron');
  });

});

describe('nbastats Player page', () => {
  let playerPage: PlayerPage;

  beforeEach(() => {
    playerPage = new PlayerPage();
  });

  it('should display date of birth in format Sep 16, 1995', () => {
    playerPage.navigateTo();
    expect(playerPage.getPlayerDOB().getText()).toEqual('Date of birth: Feb 23, 1995');
  });
});
