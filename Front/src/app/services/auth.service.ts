import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


const baseUrl = 'http://localhost:4000/';

const urlLogin = baseUrl + 'login';


const urlRegistre = baseUrl + 'signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient , private router: Router) {
    this.http = http;
    this.router = router;
  }

  login(data){
    return this.http.post(urlLogin, data);
  }

  Inscription(data){
    return this.http.post(urlRegistre, data);
  }

  checkClient(): boolean{
    if (localStorage.getItem('token') !== null && sessionStorage.getItem('role') == 'Client') {
      return true;
    } else {
        return false;
    }
  }
  isClient(): void{
    if (this.checkClient() == false){
      this.router.navigateByUrl('/guest/login/client');
    }
  }


  checkAtelier(): boolean{
    if (localStorage.getItem('token') !== null && sessionStorage.getItem('role') == 'Atelier') {
      return true;
    } else {
        return false;
    }
  }
  isAtelier(): void{
    if (this.checkAtelier() == false){
      this.router.navigateByUrl('/guest/login/client');
    }
  }

  checkFinancier(): boolean{
    if (localStorage.getItem('token') !== null && sessionStorage.getItem('role') == 'Financier') {
      return true;
    } else {
        return false;
    }
  }
  isFinancier(): void{
    if (this.checkFinancier() == false){
      this.router.navigateByUrl('/guest/login/client');
    }
  }

}
