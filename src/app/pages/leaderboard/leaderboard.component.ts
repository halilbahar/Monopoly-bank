import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerService } from 'src/app/core/services/player.service';
import { Player } from 'src/app/shared/models/player.module';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {

  players: Observable<(Player & { rank: number })[]>;

  constructor(
    public playerService: PlayerService
  ) {
    this.players = this.playerService.players.pipe(
      map(players => {
        let newPlayers = [...players] as (Player & { rank: number })[];
        newPlayers.sort((a, b) => b.balance - a.balance);
        newPlayers.forEach((player, index) => {
          const previousPlayer = newPlayers[index - 1];
          if (previousPlayer && previousPlayer.balance === player.balance) {
            player.rank = previousPlayer.rank;
          } else {
            player.rank = index + 1;
          }
        });

        return newPlayers;
      })
    );
  }
}
