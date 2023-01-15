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
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-car',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule],
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.scss']
})
export default class ListCarComponent implements OnInit{
  list: any;
  message: any;
  closeResult: string;
  modalOptions:NgbModalOptions;
  addForm: FormGroup;
  rows: FormArray;

  constructor(private authService: AuthService, private receptionService: ReceptionService,private datePipe: DatePipe,private modalService: NgbModal,private fb: FormBuilder,){
    this.authService.isAtelier();
    this.datePipe = datePipe;
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });

    this.rows = this.fb.array([]);
  }

  ngOnInit(): void {
    this.getCar();
  }

  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.rows.getRawValue());
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

  onAddRow() {
    this.rows.push(this.createItemFormGroup());
    this.addForm.get('items_value').setValue('yes');
    this.addForm.addControl('rows', this.rows);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      type: null,
      description: null,
      cout: null,
      statut: 'En cours',
    });
  }
}
