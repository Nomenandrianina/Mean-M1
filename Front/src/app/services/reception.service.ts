import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



const baseUrl = 'http://localhost:4000/';

const urlgetCar = baseUrl + 'all_car';

const urlValideCar = baseUrl + 'valide_car';

const urlReparation = baseUrl + 'add_reparation';

const urlgetReparation = baseUrl + 'all_reparation';

const urlgetReparationById = baseUrl + 'reparation/id';

const urlUpdatereparation = baseUrl + 'update/avancement';

const urlTerminerReparation = baseUrl + 'terminer/reparation';

const urlGetCarByUser = baseUrl + 'client/car/reparation';

const urlGetRepHistorique = baseUrl + 'client/historique';

const urlGetfacture= baseUrl + 'client/facture';

const urlGetlistCarUser = baseUrl + 'client/liste_voiture'




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

  getReparationById(data){
    return this.http.post(urlgetReparationById,data);
  }

  updateReparation(data){
    return this.http.post(urlUpdatereparation,data);
  }

  terminerReparation(data){
    return this.http.post(urlTerminerReparation,data);
  }

  getCarByUser(data){
    return this.http.post(urlGetCarByUser,data);
  }

  getHistoriqueBycar(data){
    return this.http.post(urlGetRepHistorique,data);
  }

  getFactureBycar(data){
    return this.http.post(urlGetfacture,data);
  }

  get_All_Car_User(data){
    return this.http.post(urlGetlistCarUser,data);
  }
}
