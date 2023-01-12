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

  checkConnection(): boolean{
    if (localStorage.getItem('token') !== null && sessionStorage.getItem('name') !== null) {
      return true;
    } else {
        return false;
    }
  }
  isConnected(): void{
    console.log(this.checkConnection());
    if (this.checkConnection() == false){
      this.router.navigateByUrl('/guest/login');
    }
  }

}
