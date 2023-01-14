import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup,  FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginclient',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './loginclient.component.html',
  styleUrls: ['./loginclient.component.scss']
})
export default class LoginclientComponent {
  message: any;
  loginForm = new FormGroup({
    email:  new FormControl(null, [ Validators.required, Validators.email]),
    mdp:  new FormControl(null, [ Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private router: Router) { }

  get email(){return this.loginForm.get('email'); }
  get mdp(){return this.loginForm.get('mdp'); }

  checkLogin(){
    const onSuccess = (response: any) => {
      console.log(response.token);
      console.log(response.user);
      if (response.status === 200){
            localStorage.setItem('token', response.token);
            sessionStorage.setItem('name', response.user.name);
            sessionStorage.setItem('firstname', response.user.firstname);
            sessionStorage.setItem('email', response.user.email);
            sessionStorage.setItem('photo', response.user.photo);
            sessionStorage.setItem('role', response.user.Role.name);
            sessionStorage.setItem('id', response.user._id);
            this.router.navigateByUrl('/home/client');
      }else{
        this.message = response.error.error;
        this.loginForm.reset();
      }
    };
    const onError = (response: any) => {
      this.message = response.error.error;
      this.loginForm.reset();
    };
    const data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.mdp
    };
    this.authService.login(data).subscribe(onSuccess,onError);
  }
}
