import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AuthService } from 'src/app/services/auth.service';
import { ReceptionService } from 'src/app/services/reception.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-facture',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})

export default class FactureComponent implements OnInit {
  name: String;
  firstname: String;
  email: String;
  public loading = false;
  id = this.route.snapshot.paramMap.get('id');
  list: any;
  detail: any;
  message: any;
  total: Number;

  constructor(private authService: AuthService, private receptionService: ReceptionService, private router: Router,private route: ActivatedRoute){
    this.authService.isClient();
    this.name = sessionStorage.getItem('name');
    this.firstname = sessionStorage.getItem('firstname');
    this.email = sessionStorage.getItem('email');
  }

  ngOnInit(): void {
    this.getCarUser();
  }

  getCarUser(): void{
    this.loading = true;
    const data = {
      id: this.id
    };
    const onSuccess = (response: any) => {
      this.loading = false;
      this.list = response.reparation;
      this.detail = response.car;
      this.total = this.list.reduce((accumulator, obj) => {
        return accumulator + obj.cout;
      }, 0);
    };
    const onError = (response: any) => {
      this.message = response.message;
      this.loading = false;
    };
    this.receptionService.getFactureBycar(data).subscribe(onSuccess,onError);
  }

}
