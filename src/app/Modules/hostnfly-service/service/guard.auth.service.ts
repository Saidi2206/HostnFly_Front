import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.estConnecte()) {
      return true; 
    } else {
      this.router.navigate(['/Inscription']); 
      return false; 
    }
  }
}
