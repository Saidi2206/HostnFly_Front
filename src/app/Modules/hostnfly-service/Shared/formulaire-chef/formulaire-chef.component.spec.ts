import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireChefComponent } from './formulaire-chef.component';

describe('FormulaireChefComponent', () => {
  let component: FormulaireChefComponent;
  let fixture: ComponentFixture<FormulaireChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulaireChefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
