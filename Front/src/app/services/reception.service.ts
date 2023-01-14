import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



const baseUrl = 'http://localhost:4000/';

const urlgetCar = baseUrl + 'all_car';

const urlValideCar = baseUrl + 'valide_car'

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
}
