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

  setPlayers(players: Player[]): void {
    this.players.next(players);
    localStorage.setItem('players', JSON.stringify(this.players.value));
  }

  changePlayer(changedPlayer: Player): void {
    const player = this.players.value.find(player => player.name === changedPlayer.name);
    player.balance = changedPlayer.balance;
    localStorage.setItem('players', JSON.stringify(this.players.value));
  }

  clearGame(): void {
    this.players.next([]);
    localStorage.removeItem('players');
  }
}
