import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/client';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formClient: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm(new Client());
  }

  createForm(client: Client){
    this.formClient = new FormGroup({
      name: new FormControl(client.name),
      type: new FormControl(client.type),
      gender: new FormControl(client.gender),
      birthDate: new FormControl(client.birthDate),
      note: new FormControl(client.note),
      inactive: new FormControl(client.inactive),
    });
  };

  onSubmit(){
    console.log(this.formClient.value);
  }

}
