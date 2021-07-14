import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/client';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formClient: FormGroup;
  clients: any[] = [];
  private showError: boolean = false;
  private url = 'http://localhost:3000/Clients'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.createForm(new Client());

    this.allClients().subscribe((clients: Client[]) => {
      console.table(clients);
      this.clients = clients;
    })
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

  allClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  }

  onSubmit(){
    console.log(this.formClient.value);

    this.http.post('http://localhost:3000/Clients', this.formClient.value).subscribe(
      () => { alert('Cliente cadastrado')},
      (err) => {alert('error')}
    )
    this.formClient.reset(new Client());

  }

  edit(id){

  }

  delete(id){
    this.http.delete(this.url + '/' + id).subscribe(
      () => { alert('Cliente excluído')},
      (err) => {alert('error')}
    );

  }

}
