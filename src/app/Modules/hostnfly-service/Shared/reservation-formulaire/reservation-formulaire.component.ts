import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-formulaire',
  templateUrl: './reservation-formulaire.component.html',
  styleUrl: './reservation-formulaire.component.css'
})
export class ReservationFormulaireComponent implements OnInit { 
  date: string = '';
  duree: string = '';
  servicetype: string = '';
  paiement: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  
  reserve() {
    // Vérifiez si le formulaire est valide avant de naviguer
    if (this.date && this.duree && this.servicetype && this.paiement) {
          this.router.navigateByUrl ('/Connexion');        
    } else {
        // Si le formulaire n'est pas valide, afficher un message d'erreur
        alert("Veuillez remplir tous les champs du formulaire avant de réserver.");
    }
}


}
