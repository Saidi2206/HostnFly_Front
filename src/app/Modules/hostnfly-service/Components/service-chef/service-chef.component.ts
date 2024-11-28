import { Component, OnInit } from '@angular/core';
import { TousLesServicesService } from '../../service/tous-les-services.service';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-service-chef',
  templateUrl: './service-chef.component.html',
  styleUrl: './service-chef.component.css'
})
export class ServiceChefComponent implements OnInit {

  constructor(private service: TousLesServicesService, private panier: PanierService) {}
  chefs: any[] = []; 
  
  ngOnInit(): void {
  this.tous_les_chef() ;
 }
  tous_les_chef() {
    this.service.tous_les_chef().subscribe(
      (res: any[]) => { 
        console.log(res); 
        this.chefs = res;
      

      },
      (err) => {
        console.log(err); 
      }
    );
  } 
  addToCart(chef: any) {
    this.panier.addToCart(chef);
  }
}
