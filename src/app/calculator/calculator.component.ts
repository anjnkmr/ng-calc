import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  displayValue = '0';
  value: number = 0;
  operation?: string;
  
  firstValue: number = 0;


  constructor() { }

  ngOnInit(): void {

  }

  buttonClicked(value: string, type: string): void {
    if (type === 'Number') {
      this.numberClicked(value);
    } else if (type === 'Operation') {
      this.operationClicked(value);
    }
  }

  operationClicked(value: string) {
    if (this.operation) {
      switch(this.operation) {
        case '+': this.setCurrentValue(this.firstValue + this.value); break;
        case '-': this.setCurrentValue(this.firstValue - this.value); break;
        case '*': this.setCurrentValue(this.firstValue * this.value); break;
        case '/': this.setCurrentValue(this.firstValue / this.value); break;
        default: console.log('Unknow Operation'); this.setCurrentValue(this.firstValue); break;
      }
    }

    if (value !== 'C' && value !== '=') {
      this.setOperation(value);
    } else {
      if (value === 'C') {
        this.setCurrentValue(0);
      }
      this.setOperation(undefined);
    }
    this.setFirstValue(this.value);
    this.setCurrentValue(0, false);
  }

  numberClicked(value: string) {
    if (!this.operation || (this.firstValue != 0 && this.operation)) {
      if (this.value != 0) {
        value = this.value + value; 
      }
    }
    this.setCurrentValue(parseInt(value));
  }

  setCurrentValue(value: number, changeDisplayValue: boolean = true) {
    // this.logValues('Before');
    this.value = value;
    if (changeDisplayValue) {
      this.displayValue = this.value.toString();
    }
    // this.logValues('After');
  }

  logValues(tag: string) {
    console.log(tag, `Value ${this.value}`);
    console.log(tag, `First Value ${this.firstValue}`);
    console.log(tag, `Operation ${this.operation}`);
  }

  setOperation(value?: string) {
    this.operation = value;
  }


  setFirstValue(value: number): void {
    this.firstValue = value;
  }

}
