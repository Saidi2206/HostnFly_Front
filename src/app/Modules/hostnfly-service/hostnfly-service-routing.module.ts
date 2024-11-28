import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDescriptionComponent } from './Components/service-description/service-description.component';
import { ServicesMassagesComponent } from './Components/services-massages/services-massages.component';
import { ReservationMassagesComponent } from './Components/reservation-massages/reservation-massages.component';
import { PaiementFormulaireComponent } from './Shared/paiement-formulaire/paiement-formulaire.component';
import { PanierComponent } from './Shared/panier/panier.component';
import { ServiceComponent } from './Components/service/service.component';
import { ServiceChauffeurComponent } from './Components/service-chauffeur/service-chauffeur.component';
import { ServiceChefComponent } from './Components/service-chef/service-chef.component';
import { ReservationChefComponent } from './Components/reservation-chef/reservation-chef.component';
import { ConnexionInviteComponent } from './Components/connexion-invite/connexion-invite.component';
import { InscriptionComponent } from './Components/inscription/inscription.component';
import { RegistreComponent } from './Components/registre/registre.component';
import { ParametreComponent } from '../hostnfly-dashboard/Components/parametre/parametre.component';
import { ReservationComponent } from '../hostnfly-dashboard/Components/reservation/reservation.component';

const routes: Routes = [
  { path: '', component: ServiceDescriptionComponent},
  { path: 'Service', component: ServiceComponent},
  { path: 'Service_massage', component: ServicesMassagesComponent},
  { path: 'Service_chauffeur', component: ServiceChauffeurComponent},
  { path: 'Connexion', component: ConnexionInviteComponent},
  { path: 'Service_chef', component: ServiceChefComponent},
  { path: 'Reservation_massage', component: ReservationMassagesComponent},
  { path: 'Reservation_chef', component: ReservationChefComponent},
  { path: 'Reservation_chauffeur', component: ReservationChefComponent},
  { path: 'Paiement', component: PaiementFormulaireComponent},
  { path: 'Panier', component: PanierComponent},
  { path: 'Inscription', component: InscriptionComponent},
  { path: 'Registre', component: RegistreComponent},
];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes),
   CommonModule
  ]
})
export class HostnflyServiceRoutingModule { }
