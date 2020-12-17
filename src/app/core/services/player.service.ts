import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from 'src/app/shared/models/player.module';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: BehaviorSubject<Player[]> = new BehaviorSubject(null);

  setPlayer(players: Player[]) {
    this.players.next(players);
    localStorage.setItem("player", JSON.stringify(players));
  }
}
