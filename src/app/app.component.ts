import { Component, VERSION } from '@angular/core';

import { PlayerPoolService } from './services/player-pool.service';

import {Player} from './player';
import {Roster} from './roster';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  public roster : Roster = new Roster();
  public playerPool : Map<string, Array<Player>>;
  public positions : Array<string> = ["QB","RB","WR","TE","K","D"];

  constructor(private playerService: PlayerPoolService){
    this.playerPool = playerService.getPlayerPool();
  }
}
