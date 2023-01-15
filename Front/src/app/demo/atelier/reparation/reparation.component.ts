import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormGroup,  FormControl , FormArray , FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reparation',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule],
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss']
})
export default class ReparationComponent {


  form = new FormGroup({
    id_user: new FormControl(sessionStorage.getItem('id')),
    image: new FormControl(null, [Validators.required]),
    marque:  new FormControl(null, [ Validators.required]),
    type:  new FormControl(null, [ Validators.required]),
    moteur: new FormControl(null, [ Validators.required]),
    immatricule : new FormControl(null, [Validators.required])
  });

  constructor(private authService: AuthService){
    this.authService.isAtelier();
  }
}
