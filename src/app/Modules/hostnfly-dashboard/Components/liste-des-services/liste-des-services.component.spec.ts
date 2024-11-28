import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesServicesComponent } from './liste-des-services.component';

describe('ListeDesServicesComponent', () => {
  let component: ListeDesServicesComponent;
  let fixture: ComponentFixture<ListeDesServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeDesServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeDesServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
