import { Component, OnInit } from '@angular/core';
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


  constructor(private authService: AuthService, private receptionService: ReceptionService,private modalService: NgbModal){
    this.authService.isAtelier();
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop',
      size: 'lg',
      windowClass: 'modal-xl'
    }
  }
  tostring(value: Number): String{
    return value.toString();
  }
  ngOnInit(): void {
    this.getReparation();
  }

  open(content,id) {
    console.log(id);
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  close(){
    this.loading = true;
    const data = {

    };
    this.modalService.dismissAll();
    const onSuccess = (response: any) => {
      if(response.status == 200){
        this.loading = false;
        window.location.reload();
      }
    };
    const onError = (response: any) => {
      this.loading = false;
      this.message = response.message;
    };
    this.receptionService.reparation(data).subscribe(onSuccess,onError);
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
