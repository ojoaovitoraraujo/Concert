import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.createForm(new User());
  }

  createForm(user: User){
    this.formLogin = new FormGroup({
      username: new FormControl(user.username),
      password: new FormControl(user.password),
    })
  }

  showSidebarEmitter = new EventEmitter<boolean>();

  private usuarioAutenticado: boolean = false;

  authorization(){
    console.log(this.formLogin.controls.username.value)
    console.log(this.formLogin.controls.password.value)
    if(this.formLogin.controls.username.value == 'concert' && this.formLogin.controls.password.value == 'prova'){
      this.usuarioAutenticado = true;

      this.showSidebarEmitter.emit(true);

      this.router.navigate(["form"]);
    }
    else{
      this.usuarioAutenticado = false;

      this.showSidebarEmitter.emit(false);
      alert('Usuário ou senha incorretos')

    }
  }

}
