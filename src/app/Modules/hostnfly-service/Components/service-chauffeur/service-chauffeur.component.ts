import { Component, OnInit } from '@angular/core';
import { TousLesServicesService } from '../../service/tous-les-services.service';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-service-chauffeur',
  templateUrl: './service-chauffeur.component.html',
  styleUrl: './service-chauffeur.component.css'
})
export class ServiceChauffeurComponent implements OnInit {

  constructor(private service: TousLesServicesService, private panier: PanierService) {}

  ngOnInit(): void {
    this.tous_les_chauffeur();
  }
  chauffeurs: any[] = [];

  tous_les_chauffeur() {
    this.service.tous_les_chauffeur().subscribe(
      (res: any[]) => { 
        console.log(res); 
        this.chauffeurs = res;
      },
      (err) => {
        console.log(err); 
      }
    );
  } 
  addToCart(chauffeur: any) {
    this.panier.addToCart(chauffeur);
}
}
