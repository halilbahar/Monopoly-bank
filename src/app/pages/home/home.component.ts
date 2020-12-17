import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      names: this.fb.array([
        this.fb.control(''),
        this.fb.control('')
      ]),
      initialMoney: [15000, Validators.required]
    });

    this.form.setValidators([this.enoughNamesValidator(), this.uniqueNameValidator()]);
  }

  get names(): AbstractControl[] {
    return (this.form.get('names') as FormArray).controls;
  }

  addPlayer(): void {
    this.names.push(this.fb.control(''));
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
