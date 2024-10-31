import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login ={
  username:'',
  password:''
  }



value: string |undefined;

  onLogin() {
    console.log(this.login);
  }
}
