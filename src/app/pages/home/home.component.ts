import { PlayerService } from 'src/app/core/services/player.service';
import { Player } from 'src/app/shared/models/player.module';

import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;

  playerLimit = 8;
  minPlayer = 2;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      names: this.fb.array([this.fb.control(''), this.fb.control('')]),
      initialMoney: [15000, Validators.required]
    });

    this.form.setValidators([this.enoughNamesValidator(), this.uniqueNameValidator()]);
  }

  get names(): FormArray {
    return this.form.get('names') as FormArray;
  }

  addPlayer(): void {
    this.names.push(this.fb.control(''));
  }

  play(): void {
    const formValue = this.form.value;
    const initialMoney: number = formValue.initialMoney;
    const names = formValue.names.filter(name => name.length) as string[];

    const player = names.map(name => ({ name, balance: initialMoney } as Player));

    this.playerService.setPlayers(player);
    this.router.navigate(['overview']);
  }

  private uniqueNameValidator(): ValidatorFn {
    return (group: FormGroup): ValidationErrors => {
      const names = group.get('names') as FormArray;

      const existingName = [];
      names.controls.forEach(nameControl => {
        if (nameControl.value) {
          existingName.push(nameControl.value);
        }
      });

      // TODO: Set error on fields
      const isUnique = new Set(existingName).size === existingName.length;
      return isUnique ? null : { isUnique: false };
    };
  }

  private enoughNamesValidator(): ValidatorFn {
    return (group: FormGroup): ValidationErrors => {
      const names = group.get('names') as FormArray;

      let count = 0;
      names.controls.forEach(nameControl => nameControl.value && count++);

      return count >= this.minPlayer ? null : { enoughPlayer: false };
    };
  }
}
