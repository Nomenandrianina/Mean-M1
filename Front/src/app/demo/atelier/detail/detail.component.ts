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

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule,NgxLoadingModule,ProgressBarModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export default class DetailComponent {

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

  close(){
    this.modalService.dismissAll();
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

}
