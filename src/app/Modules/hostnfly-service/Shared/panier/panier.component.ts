import { Component, Input } from '@angular/core';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
 
  cart: any[] = [];

  constructor(private cartService: PanierService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
    });
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }

  getTotalPrice() {
    return this.cart.reduce((sum, item) => sum + parseFloat(item.prix), 0);
  }

  getTotalPriceWithTax() {
    return this.getTotalPrice() * 1.12; // Assuming 12% tax
  }
}



