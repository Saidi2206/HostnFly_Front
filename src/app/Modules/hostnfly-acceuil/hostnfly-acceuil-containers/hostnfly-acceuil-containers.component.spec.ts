import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostnflyAcceuilContainersComponent } from './hostnfly-acceuil-containers.component';

describe('HostnflyAcceuilContainersComponent', () => {
  let component: HostnflyAcceuilContainersComponent;
  let fixture: ComponentFixture<HostnflyAcceuilContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostnflyAcceuilContainersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostnflyAcceuilContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
