import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from 'src/app/shared/models/player.module';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: BehaviorSubject<Player[]>;

  constructor() {
    const playersStorage = localStorage.getItem('players');
    const initialValue = playersStorage ? JSON.parse(playersStorage) : [];
    this.players = new BehaviorSubject(initialValue);
  }

  setPlayer(players: Player[]) {
    this.players.next(players);
    localStorage.setItem('players', JSON.stringify(players));
  }
}
