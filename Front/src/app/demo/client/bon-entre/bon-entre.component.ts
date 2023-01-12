import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bon-entre',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './bon-entre.component.html',
  styleUrls: ['./bon-entre.component.scss']
})
export default class BonEntreComponent {
  constructor(private authService: AuthService){
    this.authService.isClient();
  }
}
