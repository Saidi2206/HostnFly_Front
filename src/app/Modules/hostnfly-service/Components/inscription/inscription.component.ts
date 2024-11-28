import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent implements OnInit {
  loginData = {
    Email: '',
    Mot_de_passe: ''
  };
  constructor(private authService: AuthenticationService,private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
  }
  onLogin() {
    if (!this.loginData.Email || !this.loginData.Mot_de_passe) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    this.authService.connecter(this.loginData).subscribe(
      (response) => {
        if (response && response.mytoken) {
          console.log('Token:', response.mytoken);
          localStorage.setItem('token', response.mytoken);
          this.router.navigate(['/Dashboard']); 
        } else {
          console.error('Réponse de connexion invalide:', response);
          this.toastr.error('Échec de la connexion. Veuillez réessayer.');
        }
      },
      (error) => {
        console.error('Erreur lors de la connexion:', error);
        this.toastr.error('Échec de la connexion. Veuillez réessayer.');
      }
    );
  }
}
