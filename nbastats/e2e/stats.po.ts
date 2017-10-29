import { browser, by, element, $, $$ } from 'protractor';

export class StatsPage {
  navigateTo() {
    return browser.get('/stats');
  }

  getAllPlayers() {
    return $$('.playerlist div span a').count();
  }

  getFirstPlayer() {
    return $('.playerlist div span a').getText();
  }

  clickPlayer() {
    return element(by.partialLinkText('Aaron Gordon')).click();
  }

  getPlayerName() {
    return $('.playerdata p').getText();
  }
}

export class PlayerPage {
  navigateTo() {
    // Andrew Wiggins
    return browser.get('/player/203952');
  }

  getPlayerDOB() {
    return $$('.playerdata p').last();
  }
}
