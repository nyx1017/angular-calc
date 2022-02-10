import { Component, OnInit } from '@angular/core';
import { HistoryViewModel } from '../data/history.view-model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history:Array<HistoryViewModel>=[]
  constructor() { }

  ngOnInit(): void {
  }
// addToHistory(history: HistoryViewModel) {
//     this.firstNumber=this.FirstNumber
//     this.secondNumber.push(this.SecondNumber)
//     this.operator.push(this.Operator)
//     this.answers.push(this.answer)
//   }
}
