import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationChauffeurComponent } from './reservation-chauffeur.component';

describe('ReservationChauffeurComponent', () => {
  let component: ReservationChauffeurComponent;
  let fixture: ComponentFixture<ReservationChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationChauffeurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
