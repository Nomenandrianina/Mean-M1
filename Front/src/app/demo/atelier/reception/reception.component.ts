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
import {DatePipe} from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reception',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule],
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.scss']
})
export default class ReceptionComponent implements OnInit {

  list: any;
  message: any;

  constructor(private authService: AuthService, private receptionService: ReceptionService,private datePipe: DatePipe){
    this.authService.isAtelier();
    this.datePipe = datePipe;
  }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void{
    const onSuccess = (response: any) => {
      this.list = response.car;
      console.log(this.list);
    };
    const onError = (response: any) => {
      this.message = response.message;
    };
    this.receptionService.getCar().subscribe(onSuccess,onError);
  }

  valideEnter(id_car){
    const data = {
      id: id_car
    };
    const onSuccess = (response: any) => {
      if(response.status == 200){
        this.message = "Le " + response.car.marque + " " + response.car.type + " est bien reçu" ;
      }
    };
    const onError = (response: any) => {
      this.message = response.message;
    };
    this.receptionService.valideCar(data).subscribe(onSuccess,onError);
  }

  removeMessage(){
    this.message = null;
    window.location.reload();
  }
}
