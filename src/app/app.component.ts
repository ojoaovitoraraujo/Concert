import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Concert';
  showSidebar: boolean = false;
  transactions: any[] = [];

  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.authService.showSidebarEmitter.subscribe(
      show => this.showSidebar = show
    );
  }

  transact($event){
    console.log($event);
    const transact = {...$event, data: new Date()};
    this.transactions.push(transact);
  }
}
