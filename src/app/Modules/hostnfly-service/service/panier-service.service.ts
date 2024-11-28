import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {

  constructor() { }
 
  private panierItemsSubject = new BehaviorSubject<any[]>([]);
  panierItems$ = this.panierItemsSubject.asObservable();


  setData(item: any) {
    const currentPanierItems = this.panierItemsSubject.getValue();
    const updatedPanierItems = [...currentPanierItems, item];
    this.panierItemsSubject.next(updatedPanierItems);
  }
}
