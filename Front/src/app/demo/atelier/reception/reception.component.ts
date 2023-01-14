import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormGroup,  FormControl , FormArray , FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReceptionService } from 'src/app/services/reception.service';

@Component({
  selector: 'app-reception',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule],
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.scss']
})
export default class ReceptionComponent implements OnInit {

  list: any;
  message: '';
  constructor(private authService: AuthService, private receptionService: ReceptionService){
    this.authService.isAtelier();
  }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void{
    const onSuccess = (response: any) => {
      console.log(response);
      this.list = response.car;
      console.log(this.list);
    };
    const onError = (response: any) => {
      this.message = response.message;
    };
    this.receptionService.getCar().subscribe(onSuccess,onError);
  }
}
