import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-reactive-forms',
  templateUrl: './data-reactive-forms.component.html',
  styleUrls: ['./data-reactive-forms.component.scss']
})
export class DataReactiveFormsComponent implements OnInit {

  @Input() teste: any;

  constructor() { }

  ngOnInit(): void {
  }

}
