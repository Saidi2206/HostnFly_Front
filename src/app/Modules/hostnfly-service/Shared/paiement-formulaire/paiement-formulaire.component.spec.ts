import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementFormulaireComponent } from './paiement-formulaire.component';

describe('PaiementFormulaireComponent', () => {
  let component: PaiementFormulaireComponent;
  let fixture: ComponentFixture<PaiementFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaiementFormulaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaiementFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
