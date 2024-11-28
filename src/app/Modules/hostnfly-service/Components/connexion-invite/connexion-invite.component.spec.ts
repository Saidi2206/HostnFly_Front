import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionInviteComponent } from './connexion-invite.component';

describe('ConnexionInviteComponent', () => {
  let component: ConnexionInviteComponent;
  let fixture: ComponentFixture<ConnexionInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnexionInviteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnexionInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
