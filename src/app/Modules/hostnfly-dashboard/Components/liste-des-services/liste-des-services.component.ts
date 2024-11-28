  import { Component } from '@angular/core';
  import { ServicesService } from '../../Service/services.service';
  import { ToastrService } from 'ngx-toastr';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-liste-des-services',
    templateUrl: './liste-des-services.component.html',
    styleUrl: './liste-des-services.component.css'
  })
  export class ListeDesServicesComponent {

    constructor(private service: ServicesService,private toastr: ToastrService , private router:Router) {}
    massages: any[] = [];
    chauffeurs: any[] = [];
    chefs: any[] = [];
    filteredServices: any[] = [];
    selectedFilter: string = 'massage';


    modifier(id: any) {
      this.router.navigate(['/modifer-service', id]);
    }

    ngOnInit() {
      this.affichermassage();
      this.afficherchauffeur();
      this.afficherchef();
      
    } 

    afficherchauffeur() {
      this.service.getallchauffeur().subscribe(
        (res: any[]) => { 
          console.log(res); 
          this.chauffeurs = res;
        },
        (err) => {
          console.log(err); 
        }
      );

    }
    affichermassage() {
      this.service.getallmassage().subscribe(
        (res: any[]) => { 
          console.log(res); 
          this.massages = res;
        

        },
        (err) => {
          console.log(err); 
        }
      );
    }
    afficherchef() {
      this.service.getallchef().subscribe(
        (res: any[]) => { 
          console.log(res); 
          this.chefs = res;
        

        },
        (err) => {
          console.log(err); 
        }
      );
    }
    supprimer(id: any) {
      if (this.selectedFilter === 'massage') {
          this.service.supprimermassage(id).subscribe(
              (res) => {
                  this.toastr.warning('Service supprimée avec succès', 'Suppression');
                  this.affichermassage();
                  window.location.reload();
              },
              (err) => {
                  console.log(err);
              }
          );
      } else if (this.selectedFilter === 'chef') {
          this.service.supprimerchef(id).subscribe(
              (res) => {
                  this.toastr.warning('Service supprimée avec succès', 'Suppression');
                  this.afficherchef();
                  window.location.reload();
              },
              (err) => {
                  console.log(err);
              }
          );
      } else if (this.selectedFilter === 'chauffeur') {
          this.service.supprimerchauffeur(id).subscribe(
              (res) => {
                  this.toastr.warning('Service supprimée avec succès', 'Suppression');
                  this.afficherchauffeur();
                  window.location.reload();
              },
              (err) => {
                  console.log(err);
              }
          );
      }
  }

    chargerDonnees(event: any) {
      this.selectedFilter = event.target.value; // Mettre à jour le filtre sélectionné
      this.updateFilteredServices(); // Mettre à jour les services filtrés
    }
    updateFilteredServices() {
      if (this.selectedFilter === 'massage') {
        this.filteredServices = this.massages;
      }  else if (this.selectedFilter === 'chef') {
        this.filteredServices = this.chefs;
      } else if (this.selectedFilter === 'chauffeur') {
        this.filteredServices = this.chauffeurs;
      }
    }
  }
