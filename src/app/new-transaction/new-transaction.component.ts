import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent implements OnInit {

  constructor(private calendar: NgbCalendar, ) { }

  @Output()onTransact = new EventEmitter<any>();

  value: number;
  destination: number;
  categories: FormGroup;
  paidOut: string[];

  PickSpending: string;
  spendings: string[] = ['Carro', 'Família', 'Descanso', 'Viagem'];

  model: NgbDateStruct;
  today = this.calendar.getToday();

  ngOnInit() {
  }

  transact(){
    const emitValue = {value: this.value, destination: this.destination, categories: this.categories, paidOut: this.paidOut, Pickspendigs: this.PickSpending, model: this.model};
    this.onTransact.emit(emitValue)
  }
}
