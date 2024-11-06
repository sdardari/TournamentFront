import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {passwordMisMatchValidator} from '../tools/customValidators/password-mis-match.service';
import {Auth} from '../tools/interfaces/auth';
import {AuthService} from '../tools/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  registerForm: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {
    this.registerForm = this.fb.group({
      username:this.fb.control('',[Validators.required,Validators.max(16)]),
      firstname:this.fb.control('',[Validators.required]),
      lastname:this.fb.control('',[Validators.required]),
      email:this.fb.control('',[Validators.required,Validators.email]),
      password:this.fb.control('',[Validators.required]),
      confirmPassword:this.fb.control('',[Validators.required])
    },{
      validator:passwordMisMatchValidator
    })

  }
  onRegister() {
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe({
        next:(data)=>{
          console.log('inscription succescful',data);
          localStorage.setItem('token',data.token);
          this.router.navigate(['/home']);
          console.log('le token: ', localStorage.getItem('token'));


        },
        error:(error)=>{
          console.log('register failed',error);
          alert('failed registration')
        }
      })
    }
    console.log(this.registerForm.value);
  }

  get username(){
    return this.registerForm.controls['username'];
  }
  get firstname(){
    return this.registerForm.controls['firstname'];
  }
  get lastname(){
    return this.registerForm.controls['lastname'];
  }
  get email(){
    return this.registerForm.controls['email'];
  }
  get password(){
    return this.registerForm.controls['password'];
  }
  get confirmPassword(){
    return this.registerForm.controls['confirmPassword'];
  }



}


