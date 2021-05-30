import { PlayerService } from 'src/app/core/services/player.service';
import { Player } from 'src/app/shared/models/player.module';

import { Component, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multi-transaction',
  templateUrl: './multi-transaction.component.html',
  styleUrls: ['./multi-transaction.component.scss']
})
export class MultiTransactionComponent {
  form: FormGroup;

  players: Player[];

  playersAbleToReceive: Player[] = [];

  playerToPay: Player | null;

  @ViewChild('playerToReceive') playerToReceiveSelect: MatSelect;

  constructor(private router: Router, private playerService: PlayerService, fb: FormBuilder) {
    this.form = fb.group({
      playerToPay: [null, Validators.required],
      playerToReceive: [{ value: null, disabled: true }, Validators.required],
      amount: [null, [Validators.required, this.nonNegative()]]
    });

    this.players = this.playerService.players.value;
  }

  changePlayerToPay(event: MatSelectChange): void {
    this.form.get('playerToReceive').enable();
    this.playerToPay = event.value;
    this.playersAbleToReceive = this.players.filter(player => player !== this.playerToPay);
  }

  executeTransaction(): void {
    const formValue = this.form.value;
    const playerToPay = formValue.playerToPay as Player;
    const playerToReceive = formValue.playerToReceive as Player;
    const amount = formValue.amount as number;

    playerToPay.balance -= amount;
    playerToReceive.balance += amount;

    this.playerService.changePlayer(playerToPay);
    this.playerService.changePlayer(playerToReceive);
    this.router.navigate(['overview']);
  }

  private nonNegative(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value < 0 ? { nonNegative: false } : null;
    };
  }
}
