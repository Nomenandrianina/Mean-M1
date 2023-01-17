import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup,  FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {
  message: any;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  registerform = new FormGroup({
    name:  new FormControl(null, [ Validators.required]),
    firstname:  new FormControl(null, [ Validators.required]),
    email:  new FormControl(null, [ Validators.required, Validators.email]),
    password:  new FormControl(null, [ Validators.required]),
  });

  Inscription(){
    const onSuccess = (response: any) => {
      localStorage.setItem('token', response);
      this.router.navigateByUrl('/');
    };

    const onError = (response: any) => {
      console.log(response.error.error);
      this.message=response.error.error;
      this.registerform.reset();
    };

    const data = {
      name: this.registerform.value.name,
      firstname: this.registerform.value.firstname,
      email: this.registerform.value.email,
      password: this.registerform.value.password,
      photo: "photo",
      role: "client"
    };

    this.authService.Inscription(data).subscribe(onSuccess,onError);
  }
}
