import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



const baseUrl = 'http://localhost:4000/';

const urlgetCar = baseUrl + 'all_car';

const urlValideCar = baseUrl + 'valide_car';

const urlReparation = baseUrl + 'add_reparation';

const urlgetReparation = baseUrl + 'all_reparation';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  constructor(private http: HttpClient , private router: Router) {
    this.http = http;
    this.router = router;
  }

  getCar(){
    return this.http.get(urlgetCar);
  }

  valideCar(data){
    return this.http.post(urlValideCar,data);
  }

  reparation(data){
    return this.http.post(urlReparation,data);
  }

  getReparation(){
    return this.http.get(urlgetReparation);
  }
}
