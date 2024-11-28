import { Component } from '@angular/core';
import { ServicesService } from '../../Service/services.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifer-service',
  templateUrl: './modifer-service.component.html',
  styleUrl: './modifer-service.component.css'
})
export class ModiferServiceComponent {
  titre: string = '';
  description: string = '';
  prix: string = '';
  massageId: any;
  chefId: any;
  chauffeurId: any;

  constructor(public service: ServicesService,private toastr: ToastrService ,private router: Router, private act: ActivatedRoute) {}

  ngOnInit(): void {
    this.massageId = this.act.snapshot.paramMap.get('id');
    if (this.massageId) {
      this.liremassage(); 
    }
    this.chefId = this.act.snapshot.paramMap.get('id');
    if (this.chefId) {
      this.lirechef(); 
    }
    this.chauffeurId = this.act.snapshot.paramMap.get('id');
    if (this.chauffeurId) {
      this.lirechauffeur(); 
    }
  }
 
  Modifier() {
    if (this.massageId) {
      this.modifiermassage();
    } 
    if(this.chauffeurId) {
      this.modifierchauffeur();
    }
    if(this.chefId) {
      this.modifierchef();
    }
  }

  liremassage() {
    this.service.getbyidmassage(this.massageId).subscribe(
      (res: any) => {
        this.titre = res.titre;
        this.description = res.description;
        this.prix = res.prix;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  modifiermassage() {
    const massage = {
      titre: this.titre,
      description: this.description,
      prix: this.prix,
    };

    this.service.modifiermassage(this.massageId, massage).subscribe(
      (res) => { 
        this.toastr.info('Le Service a été modifié avec succès', 'Modifier');
        this.router.navigate(['/liste-service']);
      },
      (err) => {
        console.log("Erreur lors de la modification du service :", err);
      }
    );
  }
  lirechef() {
    this.service.getbyidchef(this.chefId).subscribe(
      (res: any) => {
        this.titre = res.titre;
        this.description = res.description;
        this.prix = res.prix;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  modifierchef() {
    const chef = {
      titre: this.titre,
      description: this.description,
      prix: this.prix,
    };

    this.service.modifierchef(this.chefId, chef).subscribe(
      (res) => { 
        this.toastr.info('Le Service a été modifié avec succès', 'Modifier');
        this.router.navigate(['/liste-service']);
      },
      (err) => {
        console.log("Erreur lors de la modification du service :", err);
      }
    );
  }
  lirechauffeur() {
    this.service.getbyidchauffeur(this.chauffeurId).subscribe(
      (res: any) => {
        this.titre = res.titre;
        this.description = res.description;
        this.prix = res.prix;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  modifierchauffeur() {
    const chauffeur = {
      titre: this.titre,
      description: this.description,
      prix: this.prix,
    };

    this.service.modifierchauffeur(this.chauffeurId, chauffeur).subscribe(
      (res) => { 
        this.toastr.info('Le Service a été modifié avec succès', 'Modifier');
        this.router.navigate(['/liste-service']);
      },
      (err) => {
        console.log("Erreur lors de la modification du service :", err);
      }
    );
  }
}
