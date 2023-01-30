import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup,  FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NgxLoadingModule } from 'ngx-loading';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,NgxLoadingModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
  message: any;
  public loading = false;
  loginForm = new FormGroup({
    email:  new FormControl('nomenandrianinaantonio@gmail.com', [ Validators.required, Validators.email]),
    mdp:  new FormControl('wyCP6AmJeg3T8vi', [ Validators.required]),
  });

  constructor(private authService: AuthService,private router: Router) {
    this.authService.Check_Connected_atelier();
  }

  get email(){return this.loginForm.get('email'); }
  get mdp(){return this.loginForm.get('mdp'); }

  checkLogin(){
    this.loading = true;
    const onSuccess = (response: any) => {
      if (response.status === 200){
        console.log('role', response.user.Role.name)
            this.loading = false;
            localStorage.setItem('token', response.token);
            sessionStorage.setItem('name', response.user.name);
            sessionStorage.setItem('firstname', response.user.firstname);
            sessionStorage.setItem('email', response.user.email);
            sessionStorage.setItem('photo', response.user.photo);
            sessionStorage.setItem('role', response.user.Role.name);
            if(response.user.Role.name == 'Atelier'){
              this.router.navigateByUrl('/home/atelier');
            }
            if(response.user.Role.name == 'Financier'){
              this.router.navigateByUrl('/home/financier');
            }
      }else{
        this.loading = false;
        this.message = response.error.error;
        this.loginForm.reset();
      }
    };
    const onError = (response: any) => {
      this.loading = false;
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
