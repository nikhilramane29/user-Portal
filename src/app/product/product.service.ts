import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:4001/product'

  constructor(
    private httpClient: HttpClient) { }

    getProducts() {
      //add token in the request header
    const httpOptions = {
      headers:  new HttpHeaders({
       token: sessionStorage['token']
     })
   };
     return this.httpClient.get(this.url, httpOptions)
    }

  getProductDetails(id) {
    //add token in the request header
  const httpOptions = {
    headers:  new HttpHeaders({
     token: sessionStorage['token']
   })
 };
   return this.httpClient.get(this.url+ "/details/" + id, httpOptions)
  }
}
