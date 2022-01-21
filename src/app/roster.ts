import {Player} from './player';

export class Roster {

  public points : number = 0;
  public players : Array<Player> = [];

  toggle(player : Player){
    var index = this.players.indexOf(player);
    if( index >= 0) {
      delete this.players[index];
      this.points = this.points - player.points;
    } else {
      this.players.push(player);
      this.points = this.points + player.points;
    }
  }

  contains(player : Player){
    return this.players.indexOf(player) >= 0;
  }

  addPlayer(player : Player){
    this.players.push(player);
    this.points += player.points;
  }

  removePlayer(player : Player){
    var index = this.players.indexOf(player);
    if( index >= 0) {
      delete this.players[index];
      this.points -= player.points;
    }
  }
}