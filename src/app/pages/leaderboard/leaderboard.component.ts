import { Component } from '@angular/core';
import { PlayerService } from 'src/app/core/services/player.service';
import { Player } from 'src/app/shared/models/player.module';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  players: (Player & { rank: number })[];

  constructor(playerService: PlayerService) {
    const players = playerService.players.value as (Player & { rank: number })[];
    players.sort((a, b) => b.balance - a.balance);
    players.forEach((player, index) => {
      const previousPlayer = players[index - 1];
      if (previousPlayer && previousPlayer.balance === player.balance) {
        player.rank = previousPlayer.rank;
      } else {
        player.rank = index + 1;
      }
    });

    this.players = players;
    playerService.clearGame();
  }
}
