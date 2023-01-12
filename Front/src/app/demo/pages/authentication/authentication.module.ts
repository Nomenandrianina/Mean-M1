import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [CommonModule, AuthenticationRoutingModule, ReactiveFormsModule, FormsModule]
})
export class AuthenticationModule {}
