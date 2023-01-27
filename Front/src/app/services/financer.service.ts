import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:4000/';

const urlAddPiece = baseUrl + 'financier/add_piece';
const urlGetAllPiece = baseUrl + 'financier/get_piece';


@Injectable({
  providedIn: 'root'
})
export class FinancerService {

  constructor(private http: HttpClient , private router: Router) {
    this.http = http;
    this.router = router;
  }

  add_piece(data){
    return this.http.post(urlAddPiece, data);
  }

  getAllPiece(){
    return this.http.get(urlGetAllPiece);
  }

}
