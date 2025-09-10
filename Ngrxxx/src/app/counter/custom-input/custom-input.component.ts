import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement } from '../state/counter.action';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent {
  constructor(
    private store: Store<{ counter: CounterState }>
  ) { }

  customvalue: number = 0;

  onCustomvalueButtonClicked() {
    this.store.dispatch(customIncrement({ value: +this.customvalue }))// + sign convert String to number
  }

}
