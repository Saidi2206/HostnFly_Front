import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMassagesComponent } from './services-massages.component';
import { beforeEach, describe } from 'node:test';

describe('ServicesMassagesComponent', () => {
  let component: ServicesMassagesComponent;
  let fixture: ComponentFixture<ServicesMassagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesMassagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesMassagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
