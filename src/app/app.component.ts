import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hostnfly';
  isDashboardRoute: boolean = false;
   routesToCheck = ['/ajouter-service', '/liste-service', '/Dashboard','/modifer-service','/accueil','/orders','/order-detail','/Parametre' ,'/Panier_dashboard','/reservation','/Reclamtion','/commentaires','/paiment','/utilisateur','/vente','/approuver','/ajoutercommentaires','/ajouterutilisateur'];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isDashboardRoute = this.checkIsDashboardRoute(this.router.url);
      }
    });
  }

  private checkIsDashboardRoute(url: string): boolean {
    return this.routesToCheck.some(route => url.startsWith(route));
  }
 
}
