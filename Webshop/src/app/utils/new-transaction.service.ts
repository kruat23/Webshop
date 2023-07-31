import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewTransactionService {

  constructor(private http: HttpClient) { }

  //add(date: String, product_id: String, cost: Number) { 
    //return this.http.post<any>(environment.springUrl + '/new', { "date": date, "product_id": product_id, "cost": cost } )
  //}

  add() {
    return this.http.get<any>(environment.springUrl + '/get', {});
  }
}
