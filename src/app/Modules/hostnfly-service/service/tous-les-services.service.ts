import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TousLesServicesService {

  constructor(private http: HttpClient) {}

  tous_les_massage(): Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/massage/get_all_massage');
  }
  tous_les_chauffeur(): Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/chauffeur/get_all_chauffeur');
  }
  tous_les_chef(): Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/chef/get_all_chef');
  }
  
}
