import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComponent } from './service.component';
import { beforeEach, describe, it } from 'node:test';

describe('ServiceComponent', () => {
  let component: ServiceComponent;
  let fixture: ComponentFixture<ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceComponent);
    component = fixture.componentInstance; // Assurez-vous que component est correctement initialisé
    fixture.detectChanges();
  });


});
