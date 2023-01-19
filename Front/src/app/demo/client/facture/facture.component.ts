import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-facture',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})

export default class FactureComponent {
  name: String;
  firstname: String;

  constructor(private authService: AuthService){
    this.authService.isClient();
    this.name = sessionStorage.getItem('name');
    this.firstname = sessionStorage.getItem('firstname');
  }
}
