import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationMassagesComponent } from './reservation-massages.component';

describe('ReservationMassagesComponent', () => {
  let component: ReservationMassagesComponent;
  let fixture: ComponentFixture<ReservationMassagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationMassagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationMassagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
