import { Component, OnInit } from '@angular/core';
import { HistoryViewModel } from '../data/history.view-model';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  constructor() { 
  }

mainDisplay = "";
firstNumber: any;
operator: any;
secondNumber: any;
d = "";
  
  ngOnInit(): void {
  }
  enterValue(value: any) {
    if ((this.operator == "+") || (this.operator == "-") || (this.operator == "/") || (this.operator == "*")) {
    
      this.d = this.d + value;
      this.mainDisplay = this.mainDisplay + value;
      this.secondNumber = this.d;
    } else {
      this.mainDisplay = this.mainDisplay + value;
      this.firstNumber = this.mainDisplay;
  }
  }
  operate(value: any) {
    this.mainDisplay = this.mainDisplay + value;
    this.operator = value;
  }
  clear():void {
    this.mainDisplay = ""
    this.firstNumber = "";
    this.operator = "";
    this.secondNumber = "";
    this.d = "";
  }

  answer(): void {
    if (this.operator == "+") {
      this.mainDisplay = this.mainDisplay + "=" + (parseInt(this.firstNumber) + parseInt(this.secondNumber)).toString();
      this.mainDisplay = (parseInt(this.mainDisplay) + parseInt(this.secondNumber)).toString();
    }
    else if (this.operator == "-") {
      this.mainDisplay = this.mainDisplay + "=" + (parseInt(this.firstNumber) - parseInt(this.secondNumber)).toString();
      this.mainDisplay = (parseInt(this.mainDisplay) - parseInt(this.secondNumber)).toString();
    }
    else if (this.operator == "/") {
      this.mainDisplay = this.mainDisplay + "=" + (parseInt(this.firstNumber) / parseInt(this.secondNumber)).toString();
      this.mainDisplay = (parseInt(this.mainDisplay) / parseInt(this.secondNumber)).toString();
    }
    else if (this.operator == "*") {
      this.mainDisplay = this.mainDisplay + "=" + (parseInt(this.firstNumber) * parseInt(this.secondNumber)).toString();
      this.mainDisplay = (parseInt(this.mainDisplay) * parseInt(this.secondNumber)).toString();
    }
    else if (this.operator == "/" && this.secondNumber=="0"){
      this.mainDisplay = "Invalid";
    }
    else {
      this.mainDisplay = "Invalid";
    }
  }
}
