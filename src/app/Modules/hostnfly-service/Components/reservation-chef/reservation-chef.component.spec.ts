import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationChefComponent } from './reservation-chef.component';

describe('ReservationChefComponent', () => {
  let component: ReservationChefComponent;
  let fixture: ComponentFixture<ReservationChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationChefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
