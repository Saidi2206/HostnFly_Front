import { Component, HostListener } from '@angular/core';
import { AuthenticationService } from '../../hostnfly-service/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostnfly-dashboard-containers',
  templateUrl: './hostnfly-dashboard-containers.component.html',
  styleUrl: './hostnfly-dashboard-containers.component.css'
})
export class HostnflyDashboardContainersComponent {

  constructor(private authService: AuthenticationService, private router: Router) { }
  ngOnInit(): void {
    if (!this.authService.estConnecte()) {
      this.router.navigate(['/inscription']);    }
  }
  @HostListener('window:beforeunload', ['$event'])
  afterUnloadHandler(event: Event) {
    this.authService.deconnecter();
  }
}
