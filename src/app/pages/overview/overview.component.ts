import { EndGameDialogComponent } from 'src/app/components/end-game-dialog/end-game-dialog.component';
import { PlayerService } from 'src/app/core/services/player.service';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  constructor(
    public playerService: PlayerService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  openEndGameDialog(): void {
    this.dialog
      .open(EndGameDialogComponent, { autoFocus: false })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.router.navigate(['leaderboard']);
        }
      });
  }
}
