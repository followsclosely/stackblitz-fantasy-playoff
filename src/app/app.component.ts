import { Component, VERSION } from '@angular/core';

import { PlayerPoolService } from './services/player-pool.service';

import {Player} from './player';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  name = 'Angular ' + VERSION.major;

  public roster : Array<Player> = [];
  public playerPool : Map<string, Array<Player>>;
  
  public positions : Array<string> = ["QB","RB","WR","TE","K","D"];

  constructor(private playerService: PlayerPoolService){
    this.playerPool = playerService.getPlayerPool();
  }

  toggle(player : Player){
    
    var index = this.roster.indexOf(player);
    if( index >= 0) {
      console.log("Removing " + player);
      delete this.roster[index];
    } else {
      console.log("Adding " + player);
      this.roster.push(player);
    }
  }
}
