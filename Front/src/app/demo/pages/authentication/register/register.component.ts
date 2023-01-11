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
    photo:  new FormControl("photo"),
    role:  new FormControl("client"),
  });

  Inscription(){
    const onSuccess = (response: any) => {
      if (response.status === 200){
        console.log('test');
        this.message = response.message;

        // this.router.navigateByUrl('/');
      }else{
        this.message = response.message;
        // this.registerform.reset();
      }
    };

    const onError = (response: any) => {
      this.registerform.reset();
    };

    const data = {
      name: this.registerform.value.name,
      firstname: this.registerform.value.firstname,
      email: this.registerform.value.email,
      password: this.registerform.value.password,
      photo: this.registerform.value.photo,
      role: this.registerform.value.role
    };

    this.authService.Inscription(data).subscribe(onSuccess,onError);
  }
}
