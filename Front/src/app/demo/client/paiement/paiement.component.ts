import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AuthService } from 'src/app/services/auth.service';
import { ReceptionService } from 'src/app/services/reception.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,  FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'app-paiement',
  standalone: true,
  imports: [CommonModule, SharedModule,ReactiveFormsModule,NgxLoadingModule],
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export default class PaiementComponent {
  constructor(private authService: AuthService, private receptionService: ReceptionService, private router: Router,private route: ActivatedRoute){
    this.authService.isClient();
  }
}
