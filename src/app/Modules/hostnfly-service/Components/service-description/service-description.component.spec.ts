import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDescriptionComponent } from './service-description.component';
import { beforeEach, describe, it } from 'node:test';

describe('ServiceDescriptionComponent', () => {
  let component: ServiceDescriptionComponent;
  let fixture: ComponentFixture<ServiceDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
