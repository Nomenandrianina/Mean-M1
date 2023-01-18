import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormGroup,  FormControl , FormArray , FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ReceptionService } from 'src/app/services/reception.service';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { NgxLoadingModule } from 'ngx-loading';
import {ProgressBarModule} from "angular-progress-bar";
import DetailComponent from "../detail/detail.component";





@Component({
  selector: 'app-reparation',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule,NgxLoadingModule,ProgressBarModule],
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss']
})
export default class ReparationComponent implements OnInit {

  public loading = false;
  list: any;
  message: any;
  modalOptions:NgbModalOptions;
  closeResult: string;
  detail: {};
  kaka: string;


  constructor(private authService: AuthService, private receptionService: ReceptionService,private modalService: NgbModal){
    this.authService.isAtelier();
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop',
      size: 'lg',
      windowClass: 'modal-xl'
    }
  }

  ngOnInit(): void {
    this.getReparation();
  }


  open(id) {
    this.modalService.open(DetailComponent);
  }


  getReparation(): void{
    this.loading = true;

    const onSuccess = (response: any) => {
      console.log(response);
      this.loading = false;
      this.list = response.reparation;
    };
    const onError = (response: any) => {
      this.loading = false;
      this.message = response.message;
    };
    this.receptionService.getReparation().subscribe(onSuccess,onError);
  }
}