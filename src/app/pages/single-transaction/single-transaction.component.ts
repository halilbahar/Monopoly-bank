import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/core/services/player.service';
import { Player } from 'src/app/shared/models/player.module';

@Component({
  selector: 'app-single-transaction',
  templateUrl: './single-transaction.component.html',
  styleUrls: ['./single-transaction.component.scss']
})
export class SingleTransactionComponent {
  form: FormGroup;

  players: Player[];

  constructor(private router: Router, private playerService: PlayerService, fb: FormBuilder) {
    this.form = fb.group({
      player: [null, Validators.required],
      amount: [null, Validators.required]
    });

    this.players = this.playerService.players.value;
  }

  executeTransaction(): void {
    const formValue = this.form.value;
    const player = formValue.player as Player;
    const amount = formValue.amount as number;

    player.balance += amount;

    this.playerService.changePlayer(player);
    this.router.navigate(['overview']);
  }
}
