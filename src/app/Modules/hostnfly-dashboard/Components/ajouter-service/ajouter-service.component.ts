import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Service/services.service';
import { ToastrService } from 'ngx-toastr';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-ajouter-service',
  templateUrl: './ajouter-service.component.html',
  styleUrl: './ajouter-service.component.css'
})
export class AjouterServiceComponent implements OnInit {
  titre: string = '';
  description: string = '';
  prix: string = '';
  services: string = '';

  


  constructor(public service: ServicesService,private toastr: ToastrService ,private router: Router,) {}

  ngOnInit(): void {

  }
  
  
 
  ajouter() {
    const item = {
      titre: this.titre,
      description: this.description,
      prix: this.prix,
    };

    // Vérifier le type de service sélectionné
    switch (this.services) {
      case 'massage':
        this.ajoutermassage();
        break;
      case 'chef':
        this.ajouterchef();
        break;
      case 'chauffeur':
        this.ajouterchauffeur();
        break;
      default:
        console.log("Type de service non reconnu :", this.services);
        break;
    }
  }
   
  ajoutermassage() {
    const massage = {
      titre: this.titre,
      description: this.description,
      prix: this.prix,
    };
  
    this.service.ajoutermassage(massage).subscribe(
      (res) => {
        this.toastr.success('Massage ajouté avec succès', 'Succès' );
        setTimeout(() => {
          window.location.reload();
        }, 10); 
      },
      (err) => {
        console.log("Erreur lors de l'ajout du massage :", err);
        this.toastr.error('Une erreur est survenue lors de l\'ajout du massage', 'Erreur');
      }
    );
  }
  ajouterchef() {
    const chef = {
      titre: this.titre,
      description: this.description,
      prix: this.prix,
    };
  
    this.service.ajouterchef(chef).subscribe(
      (res) => {
        alert('chef ajouté avec succès');
        setTimeout(() => {
          window.location.reload();
        }, 10); 
      },
      (err) => {
        console.log("Erreur lors de l'ajout du chef :", err);
        this.toastr.error('Une erreur est survenue lors de l\'ajout du chef', 'Erreur');
      }
    );
  }
  
  ajouterchauffeur() {
    const chauffeur = {
      titre: this.titre,
      description: this.description,
      prix: this.prix,
    };
  
    this.service.ajouterchauffeur(chauffeur).subscribe(
      (res) => {
        alert('chauffeur ajouté avec succès');
        setTimeout(() => {
          window.location.reload();
        }, 10); 
      },
      (err) => {
        console.log("Erreur lors de l'ajout du chauffeur :", err);
        this.toastr.error('Une erreur est survenue lors de l\'ajout du chauffeur', 'Erreur');
      }
    );
  }
  


}
