import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup,  FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
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
      if (response.status === 200){
        this.router.navigateByUrl('/');
      }else{
        this.message = response.message;
        this.loginForm.reset();
      }
    };
    const onError = (response: any) => {
      this.loginForm.reset();
    };
    const data = {
      email: this.loginForm.value.email,
      mdp: this.loginForm.value.mdp
    };
    this.authService.login(data).subscribe(onSuccess,onError);
  }
}
