import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
//created object of http client
  constructor(private http:HttpClient) { 

  }
  getproduct()
  {
    return this.http.get("https:fakestoreapi.com/products")
  }
  //single view
  getProductById(id:string)
  {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
    
  }
  
}
