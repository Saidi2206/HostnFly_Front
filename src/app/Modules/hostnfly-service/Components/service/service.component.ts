import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
 
  showAdditionalServices: boolean = false;

  otherServices = [
    { title: 'Visites guidées et Activités', icon: 'assets/img/guide-touristique.png ', properties: 0 }, 
    { title: 'Maison dhôte', icon: 'assets/img/maison-dhotes.png', properties: 0 }
  ];
  

  toggleAdditionalServices() {
    this.showAdditionalServices = !this.showAdditionalServices;
  }
}
