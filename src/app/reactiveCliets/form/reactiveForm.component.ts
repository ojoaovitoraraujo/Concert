import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ReactiveClient } from '../shares/reactiveClient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveForm',
  templateUrl: './reactiveForm.component.html',
  styleUrls: ['./reactiveForm.component.scss']
})
export class FormReactiveComponent implements OnInit {
  formReactiveClient: FormGroup;
  reactiveClients: any[] = [];
  private url = 'http://localhost:3000/ReactiveClients'

  @Output() onSubmitReactiveForm = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.createForm(new ReactiveClient());

    this.allReactiveClients().subscribe((reactiveClients: ReactiveClient[]) => {
      console.table(reactiveClients);
      this.reactiveClients = reactiveClients;
    })
  }

  createForm(reactiveClient: ReactiveClient){
    this.formReactiveClient = this.formBuilder.group({
      name: [reactiveClient.name],
      type: [reactiveClient.type],
      gender: [reactiveClient.gender],
      birthDate: [reactiveClient.birthDate],
      note: [reactiveClient.note],
      inactive: [reactiveClient.inactive]
    });
  };

  allReactiveClients(): Observable<ReactiveClient[]>{
    return this.http.get<ReactiveClient[]>(this.url);
  }

  onSubmit(){
    console.log(this.formReactiveClient.controls.name.value);
    console.log(JSON.stringify(this.formReactiveClient.value))

    this.http.post(this.url, this.formReactiveClient.value).subscribe((response) =>{
      console.log('response', response)
    })

    this.formReactiveClient.reset(new ReactiveClient());
  }

  edit(id){

  }

  delete(id){
    this.http.delete(this.url + '/' + id).subscribe(data => {
      console.log(data);
    });
  }
}
