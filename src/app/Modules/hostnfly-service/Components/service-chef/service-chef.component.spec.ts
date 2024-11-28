import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChefComponent } from './service-chef.component';

describe('ServiceChefComponent', () => {
  let component: ServiceChefComponent;
  let fixture: ComponentFixture<ServiceChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceChefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
