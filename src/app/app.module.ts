  import { ErrorHandler, NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { HttpClientModule } from '@angular/common/http';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
  import { ToastrModule } from 'ngx-toastr';



  import { AppRoutingModule } from './app-routing.module';
  import { HostnflyServiceRoutingModule } from './Modules/hostnfly-service/hostnfly-service-routing.module';
  import { AppComponent } from './app.component';
  import { BarreLateralComponent } from './Modules/hostnfly-service/Shared/barre-lateral/barre-lateral.component';
  import { InformationGeneralComponent } from './Modules/hostnfly-service/Shared/information-general/information-general.component';
  import { ServiceDescriptionComponent } from './Modules/hostnfly-service/Components/service-description/service-description.component';
  import { ServiceComponent } from './Modules/hostnfly-service/Components/service/service.component';
  import { ServicesMassagesComponent } from './Modules/hostnfly-service/Components/services-massages/services-massages.component';
  import { ReservationMassagesComponent } from './Modules/hostnfly-service/Components/reservation-massages/reservation-massages.component';
  import { ReservationFormulaireComponent } from './Modules/hostnfly-service/Shared/reservation-formulaire/reservation-formulaire.component';
  import { PaiementFormulaireComponent } from './Modules/hostnfly-service/Shared/paiement-formulaire/paiement-formulaire.component';
  import { FormsModule } from '@angular/forms';
  import { PanierComponent } from './Modules/hostnfly-service/Shared/panier/panier.component';
  import { AutresServicesComponent } from './Modules/hostnfly-service/Components/autres-services/autres-services.component';
  import { ServiceChefComponent } from './Modules/hostnfly-service/Components/service-chef/service-chef.component';
  import { ServiceChauffeurComponent } from './Modules/hostnfly-service/Components/service-chauffeur/service-chauffeur.component';
  import { FormulaireChefComponent } from './Modules/hostnfly-service/Shared/formulaire-chef/formulaire-chef.component';
  import { FormulaireChauffeurComponent } from './Modules/hostnfly-service/Shared/formulaire-chauffeur/formulaire-chauffeur.component';
  import { ReservationChefComponent } from './Modules/hostnfly-service/Components/reservation-chef/reservation-chef.component';
  import { ReservationChauffeurComponent } from './Modules/hostnfly-service/Components/reservation-chauffeur/reservation-chauffeur.component';
  import { ConnexionInviteComponent } from './Modules/hostnfly-service/Components/connexion-invite/connexion-invite.component';
  import { InscriptionComponent } from './Modules/hostnfly-service/Components/inscription/inscription.component';
  import { HostnflyServiceContainersComponent } from './Modules/hostnfly-service/hostnfly-service-containers/hostnfly-service-containers.component';
  import { HostnflyAcceuilContainersComponent } from './Modules/hostnfly-acceuil/hostnfly-acceuil-containers/hostnfly-acceuil-containers.component';
  import { HostnflyAcceuilRoutingModule } from './Modules/hostnfly-acceuil/hostnfly-acceuil-routing.module';
  import { PresentationComponent } from './Modules/hostnfly-acceuil/Components/presentation/presentation.component';
  import { CalendrierComponent } from './Modules/hostnfly-acceuil/Components/calendrier/calendrier.component';
  import { CheckInComponent } from './Modules/hostnfly-acceuil/Components/check-in/check-in.component';
  import { FAQComponent } from './Modules/hostnfly-acceuil/Components/faq/faq.component';
  import { CatalogueComponent } from './Modules/hostnfly-acceuil/Components/catalogue/catalogue.component';
  import { HostnflyDashboardContainersComponent } from './Modules/hostnfly-dashboard/hostnfly-dashboard-containers/hostnfly-dashboard-containers.component';
  import { HostnflyDashboardRoutingModule } from './Modules/hostnfly-dashboard/hostnfly-dashboard-routing.module';
  import { MenuLateralComponent } from './Modules/hostnfly-dashboard/Components/menu-lateral/menu-lateral.component';
  import { BarreDeNavigationComponent } from './Modules/hostnfly-dashboard/Components/barre-de-navigation/barre-de-navigation.component';
  import { AccueilComponent } from './Modules/hostnfly-dashboard/Components/accueil/accueil.component';
  import { AjouterServiceComponent } from './Modules/hostnfly-dashboard/Components/ajouter-service/ajouter-service.component';
import { ListeDesServicesComponent } from './Modules/hostnfly-dashboard/Components/liste-des-services/liste-des-services.component';
import { RegistreComponent } from './Modules/hostnfly-service/Components/registre/registre.component';
import { RouterModule } from '@angular/router';
import { ModiferServiceComponent } from './Modules/hostnfly-dashboard/Components/modifer-service/modifer-service.component';
import { OrdersComponent } from './Modules/hostnfly-dashboard/Components/orders/orders.component';
import { OrderDetailComponent } from './Modules/hostnfly-dashboard/Components/order-detail/order-detail.component';
import { ReservationComponent } from './Modules/hostnfly-dashboard/Components/reservation/reservation.component';
import { ReclamtionComponent } from './Modules/hostnfly-dashboard/Components/reclamtion/reclamtion.component';
import { NotficationComponent } from './Modules/hostnfly-dashboard/Components/notfication/notfication.component';
import { CommentairesComponent } from './Modules/hostnfly-dashboard/Components/commentaires/commentaires.component';
import { UtilisateursComponent } from './Modules/hostnfly-dashboard/Components/utilisateurs/utilisateurs.component';
import { PaimentComponent } from './Modules/hostnfly-dashboard/Components/paiment/paiment.component';
import { ParametreComponent } from './Modules/hostnfly-dashboard/Components/parametre/parametre.component';
import { VenteComponent } from './Modules/hostnfly-dashboard/Components/vente/vente.component';
import { ApprouverComponent } from './Modules/hostnfly-dashboard/Components/approuver/approuver.component';
import { PanierService } from './Modules/hostnfly-service/service/panier.service';
import { FormcomComponent } from './Modules/hostnfly-dashboard/Components/formcom/formcom.component';
import { AjouteruserComponent } from './Modules/hostnfly-dashboard/Components/ajouteruser/ajouteruser.component';

  @NgModule({
    declarations: [
      AppComponent,
      BarreLateralComponent,
      InformationGeneralComponent,
      ServiceDescriptionComponent,
      ServiceComponent,
      ServicesMassagesComponent,
      ReservationMassagesComponent,
      ReservationFormulaireComponent,
      PaiementFormulaireComponent,
      PanierComponent,
      AutresServicesComponent,
      ServiceChefComponent,
      ServiceChauffeurComponent,
      FormulaireChefComponent,
      FormulaireChauffeurComponent,
      ReservationChefComponent,
      ReservationChauffeurComponent,
      ConnexionInviteComponent,
      InscriptionComponent,
      HostnflyServiceContainersComponent,
      HostnflyAcceuilContainersComponent,
      PresentationComponent,
      CalendrierComponent,
      CheckInComponent,
      FAQComponent,
      CatalogueComponent,
      HostnflyDashboardContainersComponent,
      MenuLateralComponent,
      BarreDeNavigationComponent,
      AccueilComponent,
      AjouterServiceComponent,
      ListeDesServicesComponent,
      RegistreComponent,
      ModiferServiceComponent,
      OrdersComponent,
      OrderDetailComponent,
      ReservationComponent,
      ReclamtionComponent,
      NotficationComponent,
      CommentairesComponent,
      UtilisateursComponent,
      PaimentComponent,
      ParametreComponent,
      VenteComponent,
      ApprouverComponent,
      FormcomComponent,
      AjouteruserComponent,
      
      
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot([]),
      AppRoutingModule,
      FormsModule,
      BrowserModule,
      HttpClientModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule,
      HostnflyServiceRoutingModule,
      HostnflyAcceuilRoutingModule,
      HostnflyDashboardRoutingModule,
        
      

      ],

    providers: [ 
      { provide: ErrorHandler, useClass: ErrorHandler }
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
