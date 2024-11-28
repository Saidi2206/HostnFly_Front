import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TousLesServicesService } from '../../service/tous-les-services.service';
import { PanierService } from '../../service/panier.service';


@Component({
  selector: 'app-services-massages',
  templateUrl: './services-massages.component.html',
  styleUrl: './services-massages.component.css'
})
export class ServicesMassagesComponent implements OnInit{

  constructor(private services: TousLesServicesService, private panier: PanierService) {}
  massages: any[] = []; 
  
  
  ngOnInit(): void {
    this.tous_les_massage();
  }

   tous_les_massage() {
    this.services.tous_les_massage().subscribe(
      (res: any[]) => { 
        console.log(res); 
        this.massages = res;
      },   
      (err) => {
        console.log(err); 
      }
    );
  }
  addToCart(massage: any) {
    this.panier.addToCart(massage);
  }
  
}

