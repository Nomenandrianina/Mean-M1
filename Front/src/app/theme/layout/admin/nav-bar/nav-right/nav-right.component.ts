// Angular import
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent implements OnInit {

  constructor(  private authService: AuthService){}
  ngOnInit(): void {
  }

  Deconnexion(){
    this.authService.logout();
  }
  
}
