import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private CART_SERVICE_BASE_URL = "http://35.223.97.142:8080/v1/cart";

  constructor(private readonly http: HttpClient) { }

  // public getUserCart(cartId: string): Observable<Cart> {
  //   const url = `${this.CART_SERVICE_BASE_URL}/${cartId}`;
  //   return this.http.get<Cart>(url, {
  //     headers: this.createHttpHeaders()
  //   });
  // }

}
