import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Service/services.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  massages: any[] = [];
  chefs: any[] = [];
  chauffeurs: any[] = [];
  selectedFilter: string = 'tous';
  filteredServices: any[] = []; // Tableau pour stocker les services filtrés

  constructor(private services: ServicesService) {}

  ngOnInit(): void {
    this.chargerTousLesServices();
    this.updateFilteredServices(); // Appel pour afficher tous les services au chargement de la page
  }

  chargerTousLesServices() {
    this.tous_les_massage();
    this.tous_les_chef();
    this.tous_les_chauffeur();
  }

  tous_les_massage() {
    this.services.getallmassage().subscribe(
      (res: any[]) => {
        console.log(res);
        this.massages = res.map(massage => ({
          ...massage,
          image: 'assets/img/massage.jpg',
          type: 'massage'
        }));
        this.updateFilteredServices(); // Mettre à jour les services filtrés après récupération
      },
      (err) => {
        console.log(err);
      }
    );
  }

  tous_les_chef() {
    this.services.getallchef().subscribe(
      (res: any[]) => {
        console.log(res);
        this.chefs = res.map(chef => ({
          ...chef,
          image: 'assets/img/che206.jpeg',
          type: 'chef'
        }));
        this.updateFilteredServices(); // Mettre à jour les services filtrés après récupération
      },
      (err) => {
        console.log(err);
      }
    );
  }

  tous_les_chauffeur() {
    this.services.getallchauffeur().subscribe(
      (res: any[]) => {
        console.log(res);
        this.chauffeurs = res.map(chauffeur => ({
          ...chauffeur,
          image: 'assets/img/chauffeur206.jpg',
          type: 'chauffeur'
        }));
        this.updateFilteredServices(); // Mettre à jour les services filtrés après récupération
      },
      (err) => {
        console.log(err);
      }
    );
  }

  chargerDonnees(event: any) {
    this.selectedFilter = event.target.value; // Mettre à jour le filtre sélectionné
    this.updateFilteredServices(); // Mettre à jour les services filtrés
  }

  updateFilteredServices() {
    if (this.selectedFilter === 'tous') {
      // Afficher tous les services si le filtre est "tous"
      this.filteredServices = [...this.massages, ...this.chefs, ...this.chauffeurs];
    } else if (this.selectedFilter === 'massage') {
      this.filteredServices = this.massages;
    } else if (this.selectedFilter === 'chef') {
      this.filteredServices = this.chefs;
    } else if (this.selectedFilter === 'chauffeur') {
      this.filteredServices = this.chauffeurs;
    }
  }

}
