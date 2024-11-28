import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../hostnfly-service/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barre-de-navigation',
  templateUrl: './barre-de-navigation.component.html',
  styleUrl: './barre-de-navigation.component.css'
})
export class BarreDeNavigationComponent implements OnInit  {
  constructor(private authService: AuthenticationService, private router: Router) { }
  ngOnInit(): void {
  }

  onLogout(): void {
    this.authService.deconnecter();

    this.router.navigate(['/']); 
  }
}
