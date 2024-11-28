import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-paiement-formulaire',
  templateUrl: './paiement-formulaire.component.html',
  styleUrl: './paiement-formulaire.component.css'
})
export class PaiementFormulaireComponent { 


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
  generatePDF() {
    const doc = new jsPDF();

    // Récupérer les valeurs du formulaire
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const cardName = (document.getElementById('cardName') as HTMLInputElement).value;
    const cardNumber = (document.getElementById('cardNumber') as HTMLInputElement).value;
    const expiration = (document.getElementById('expiration') as HTMLInputElement).value;
    const cvv = (document.getElementById('cvv') as HTMLInputElement).value;

    // Ajoutez le contenu du PDF
    doc.text('Détails de la Facturation', 10, 10);
    doc.text(`Nom: ${firstName}`, 10, 20);
    doc.text(`Prénom: ${lastName}`, 10, 30);
    doc.text(`Adresse: ${address}`, 10, 40);
    doc.text(`Email: ${email}`, 10, 50);
    doc.text(`Téléphone: ${phone}`, 10, 60);
    doc.text('Détails de Paiement', 10, 80);
    doc.text(`Nom sur la carte: ${cardName}`, 10, 90);
    doc.text(`Numéro de carte: ${cardNumber}`, 10, 100);
    doc.text(`Expiration: ${expiration}`, 10, 110);
    doc.text(`CVV: ${cvv}`, 10, 120);
    doc.text(`Montant total: ${this.getTotalPriceWithTax()}€`, 10, 140);
    // Téléchargez le PDF
    doc.save('facture.pdf');
  } 
 

}
