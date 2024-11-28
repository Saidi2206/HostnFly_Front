import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AjouterServiceComponent } from './Components/ajouter-service/ajouter-service.component';
import { ListeDesServicesComponent } from './Components/liste-des-services/liste-des-services.component';
import { ModiferServiceComponent } from './Components/modifer-service/modifer-service.component';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { OrderDetailComponent } from './Components/order-detail/order-detail.component';
import { ParametreComponent } from './Components/parametre/parametre.component';
import { PanierComponent } from '../hostnfly-service/Shared/panier/panier.component';
import { ReservationComponent } from './Components/reservation/reservation.component';
import { ReclamtionComponent } from './Components/reclamtion/reclamtion.component';
import { PaimentComponent } from './Components/paiment/paiment.component';
import { UtilisateursComponent } from './Components/utilisateurs/utilisateurs.component';
import { VenteComponent } from './Components/vente/vente.component';
import { ApprouverComponent } from './Components/approuver/approuver.component';
import { CommentairesComponent } from './Components/commentaires/commentaires.component';
import { FormcomComponent } from './Components/formcom/formcom.component';
import { AjouteruserComponent } from './Components/ajouteruser/ajouteruser.component';

const routes: Routes = [
  { path: 'ajouter-service', component: AjouterServiceComponent },
  { path: 'modifer-service/:id', component: ModiferServiceComponent  },
  { path: 'liste-service', component: ListeDesServicesComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'order-detail', component: OrderDetailComponent },
  { path: 'Parametre', component: ParametreComponent},
  { path: 'Panier_dashboard', component: PanierComponent},
  { path: 'reservation', component: ReservationComponent},
  { path: 'Reclamtion', component: ReclamtionComponent},
  { path: 'commentaires', component: CommentairesComponent},
  { path: 'paiment', component: PaimentComponent},
  { path: 'utilisateur', component: UtilisateursComponent},
  { path: 'vente', component: VenteComponent},
  { path: 'approuver', component: ApprouverComponent},
  { path: 'ajoutercommentaires', component: FormcomComponent},
  { path: 'ajouterutilisateur', component: AjouteruserComponent},


];

@NgModule({
  declarations: [],
 
    imports: [RouterModule.forChild(routes),CommonModule],
    exports: [RouterModule]

})
export class HostnflyDashboardRoutingModule { }
