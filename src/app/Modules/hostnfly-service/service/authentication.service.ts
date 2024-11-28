import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

  constructor(private http: HttpClient) {}

  connecter(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/auth/login', user);
  }
  registre(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/auth/register', user);
  }
  deconnecter() {
    localStorage.removeItem('token');
    window.history.pushState(null, '', '/');
  }
  estConnecte(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('token');
    }
    return false; 
  }

}
