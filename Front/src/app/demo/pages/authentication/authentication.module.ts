import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [CommonModule, AuthenticationRoutingModule, ReactiveFormsModule, FormsModule,DataTablesModule,NgbModule]
})
export class AuthenticationModule {}
