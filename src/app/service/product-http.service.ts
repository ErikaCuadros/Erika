import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../Modules/product.modul';


@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {
  readonly API_URL:string="https://api.escuelajs.co/api/v1/products";
  constructor(private httpClient: HttpClient) { }

  getAll() {
    
    this.httpClient.get(this.API_URL);
      
  }
  getOne(id:number) {
    const url =`${this.API_URL}/${id}`;
    this.httpClient.get(url);
      
  }
  store(product:ProductModel) {
    
    this.httpClient.post(this.API_URL, product)

  }

  update(id:number , product:ProductModel) {
    const url =`${this.API_URL}/${id}`;
    this.httpClient.put(url, product)

  }
  eraser(id:number){
    const url =`${this.API_URL}/${id}`;
    this.httpClient.delete(url)

  }
}