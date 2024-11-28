import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireChauffeurComponent } from './formulaire-chauffeur.component';

describe('FormulaireChauffeurComponent', () => {
  let component: FormulaireChauffeurComponent;
  let fixture: ComponentFixture<FormulaireChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulaireChauffeurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
