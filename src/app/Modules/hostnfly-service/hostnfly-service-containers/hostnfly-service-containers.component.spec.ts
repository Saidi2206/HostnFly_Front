import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostnflyServiceContainersComponent } from './hostnfly-service-containers.component';

describe('HostnflyServiceContainersComponent', () => {
  let component: HostnflyServiceContainersComponent;
  let fixture: ComponentFixture<HostnflyServiceContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostnflyServiceContainersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostnflyServiceContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
