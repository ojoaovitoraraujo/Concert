import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transactions: any[] = [];

  transact($event){
    console.log($event);
    const transact = {...$event, data: new Date()};
    this.transactions.push(transact);
  }
}
