import { Component } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export class RegistreComponent {

  Nom: string = '';
  Prenom: string = '';
  Email: string = '';
  Telephone: string = '';
  Mot_de_passe: string = '';
  Mot_de_passe_confirmation: string = '';
  Role: string = '';
  Service_a_offrir: string = '';

  constructor(private auth: AuthenticationService,private router: Router, private toastr: ToastrService) {}


  isValidEmail(Email: string): boolean {
      const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return EmailRegex.test(Email) 
    }
    isPasswordValid(password: string): boolean {
      const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return passwordRegex.test(password);
    }
    passwordsMatch(): boolean {
      return this.Mot_de_passe === this.Mot_de_passe_confirmation;
    }
  ajouter() {
    if (!this.isValidEmail(this.Email)) {
      this.toastr.error('Veuillez entrer une adresse email valide.');
      return;
    }

    if (!this.isPasswordValid(this.Mot_de_passe)) {
      this.toastr.error('Le mot de passe doit contenir au moins 8 caractères avec au moins une minuscule, une majuscule, un chiffre et un caractère spécial.');
      return;
    }
    if (!this.passwordsMatch()) {
      this.toastr.error('Les mots de passe ne correspondent pas.');
      return;
    }

    const user = {
      Nom: this.Nom,
      Prenom: this.Prenom,
      Email: this.Email,
      Telephone: this.Telephone,
      Mot_de_passe: this.Mot_de_passe,
      Role: this.Role,
      Service_a_offrir: this.Service_a_offrir

    };

    this.auth.registre(user).subscribe(
      (res) => {
       this.toastr.success('Utilisateur enregistré avec succès', 'Succès');
       this.router.navigate(['/Inscription']);
      },
      (err) => {
        this.toastr.error("Erreur lors de l'ajout du Utilisateur :");
      }
    );
  }
}
