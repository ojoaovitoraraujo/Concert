import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ReativeClient } from '../shares/reactiveClient';

@Component({
  selector: 'app-reactiveForm',
  templateUrl: './reactiveForm.component.html',
  styleUrls: ['./reactiveForm.component.scss']
})
export class FormReactiveComponent implements OnInit {
  formReactiveClient: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new ReativeClient());
  }

  createForm(reactiveClient: ReativeClient){
    this.formReactiveClient = this.formBuilder.group({
      name: [reactiveClient.name],
      type: [reactiveClient.type],
      gender: [reactiveClient.gender],
      birthDate: [reactiveClient.birthDate],
      note: [reactiveClient.note],
      inactive: [reactiveClient.inactive]
    });
  };

  onSubmit(){
    console.log(this.formReactiveClient.value);

    this.formReactiveClient.reset(new ReativeClient());
  }

}
