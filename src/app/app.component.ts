import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Concert';
  showSidebar: boolean = false;
  transactions: any[] = [];

  showLoadingIndicator = true

  constructor(public router: Router){
    router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart){
        this.showLoadingIndicator = true;
      }

      if(routerEvent instanceof NavigationEnd){
        setTimeout(() => {this.showLoadingIndicator = false;}, 2000)
      }
    });

  }

  ngOnInit(){
  }
}
