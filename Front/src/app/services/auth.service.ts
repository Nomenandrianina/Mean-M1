import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


const baseUrl = 'http://localhost:4000/';

const urlLogin = baseUrl + 'login';

const urlRegistre = baseUrl + 'registre';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient , private router: Router) { }

  login(data){
    return this.http.post(urlLogin, data);
  }

}
