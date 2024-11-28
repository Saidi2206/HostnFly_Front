import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {}

  ajoutermassage(massage: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/massage/create_massage', massage);
  } 
  ajouterchauffeur(chauffeur: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/chauffeur/create_chauffeur', chauffeur);
  } 
  ajouterchef(chef: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/chef/create_chef', chef);
  } 
  ajouteruser(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/user/create_user', user);
  }

  getallmassage(): Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/massage/get_all_massage');
  }
  getallchauffeur(): Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/chauffeur/get_all_chauffeur');
  }
  getallchef(): Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/chef/get_all_chef');
  }
  getalluser(): Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/user/get_all_user');
  }
  
  supprimermassage(id:any) :Observable<any[]>{
    return this.http.delete<any>('http://localhost:3000/massage/delete_massage/'+ id);
  }
  supprimerchauffeur(id:any) :Observable<any[]>{
    return this.http.delete<any>('http://localhost:3000/chauffeur/delete_chauffeur/'+ id);
  }
  supprimerchef(id:any) :Observable<any[]>{
    return this.http.delete<any>('http://localhost:3000/chef/delete_chef/'+ id);
  }
  supprimeruser(id:any) :Observable<any[]>{
    return this.http.delete<any>('http://localhost:3000/user/delete_user/'+ id);
  }

  modifiermassage(id:any, massage: any) :Observable<any[]>{
    return this.http.put<any>('http://localhost:3000/massage/update_massage/'+ id, massage);
  }
  modifierchauffeur(id:any, chauffeur: any) :Observable<any[]>{
    return this.http.put<any>('http://localhost:3000/chauffeur/update_chauffeur/'+ id, chauffeur);
  }
  modifierchef(id:any, chef: any) :Observable<any[]>{
    return this.http.put<any>('http://localhost:3000/chef/update_chef/'+ id, chef);
  }

  getbyidmassage(id:any) :Observable<any[]>{
    return this.http.get<any>('http://localhost:3000/massage/get_massage_by_id/'+ id);
  }
  getbyidchauffeur(id:any) :Observable<any[]>{
    return this.http.get<any>('http://localhost:3000/chauffeur/get_chauffeur_by_id/'+ id);
  }
  getbyidchef(id:any) :Observable<any[]>{
    return this.http.get<any>('http://localhost:3000/chef/get_chef_by_id/'+ id);
  }
}
