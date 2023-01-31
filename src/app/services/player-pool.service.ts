import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Player} from '../player';

@Injectable()
export class PlayerPoolService {

  private players = new Map<string, Array<Player>>([
    [ "QB", []],
    [ "RB", []],
    [ "WR", []],
    [ "TE", []],
    [ "K", []],
    [ "D", []],
  ]);

  constructor(private http: HttpClient) {

    this.http.get('https://raw.githubusercontent.com/followsclosely/fantasy-sports/master/nfl/playoff/src/main/resources/stats/stats.csv', {responseType: "text"} ).subscribe(data => {
      data.split('\n').forEach( (line) => {
        var i = 0;
        if( !line.startsWith('#')){
          console.log(line);
          var elements = line.split(',');
          if( parseInt(elements[0]) == 2023 ){
            var player = new Player(i++, elements[1], elements[2], elements[3], parseFloat(elements[4]));
            console.log(player.name + " " + player.position);
            this.players.get(player.position).push(player);
          }
        }
      });
    });
  }

  getPlayerPool(){
    return this.players;
  }
}