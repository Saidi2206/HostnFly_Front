import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(item: any) {
    const currentCart = this.cart.value;
    this.cart.next([...currentCart, item]);
  }

  removeFromCart(item: any) {
    const currentCart = this.cart.value;
    this.cart.next(currentCart.filter(cartItem => cartItem !== item));
  }
}
