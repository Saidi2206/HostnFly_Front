import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiferServiceComponent } from './modifer-service.component';

describe('ModiferServiceComponent', () => {
  let component: ModiferServiceComponent;
  let fixture: ComponentFixture<ModiferServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModiferServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModiferServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
