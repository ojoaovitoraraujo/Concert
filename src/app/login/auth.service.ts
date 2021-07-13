import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUser: boolean = false;

  showSidebarEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }


  authorization(user: User){
    if(user.username == 'concert' && user.password == 'prova'){
      this.authUser = true;

      this.showSidebarEmitter.emit(true);

      this.router.navigate(["/"]);
    }
    else{
      this.authUser = false;

      this.showSidebarEmitter.emit(false);
      alert('Usuário ou senha incorretos')

    }
  }
}

