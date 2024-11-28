import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostnflyDashboardContainersComponent } from './hostnfly-dashboard-containers.component';

describe('HostnflyDashboardContainersComponent', () => {
  let component: HostnflyDashboardContainersComponent;
  let fixture: ComponentFixture<HostnflyDashboardContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostnflyDashboardContainersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostnflyDashboardContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
