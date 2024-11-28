import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChauffeurComponent } from './service-chauffeur.component';

describe('ServiceChauffeurComponent', () => {
  let component: ServiceChauffeurComponent;
  let fixture: ComponentFixture<ServiceChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceChauffeurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
