import { Component } from '@angular/core';
import {ClansService} from '../../clan/services/clans.service';
import {AuthService} from '../tools/services/auth.service';
import {Router} from '@angular/router';

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
  constructor(private authService: AuthService, private clanService: ClansService, private router: Router) {}


  onLogin() {
    //console.log(this.login);
    this.authService.login(this.login.username, this.login.password).subscribe({
      next:(data)=>{
        console.log('login succescful');
        localStorage.setItem('token',data.token);
        this.router.navigate(['/home']);
         //console.log('le token: ', localStorage.getItem('token'));
      },
      error:(error)=>{
        console.log('login failed',error);
        //alert('failed connection. Verify your id ')
      }
    })
  }
}
