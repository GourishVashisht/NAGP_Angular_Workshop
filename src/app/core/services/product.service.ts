import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private PRODUCT_SERVICE_BASE_URL = "/assets/templates";

  constructor(private readonly http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    const url = `${this.PRODUCT_SERVICE_BASE_URL}/products.json`;
    return this.http.get<Product[]>(url);
  }

  public getProduct(productId: string): Observable<Product> {
    const url = `${this.PRODUCT_SERVICE_BASE_URL}/product.json`;
    return this.http.get<Product>(url);
  }

}
