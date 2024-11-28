import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprouverComponent } from './approuver.component';

describe('ApprouverComponent', () => {
  let component: ApprouverComponent;
  let fixture: ComponentFixture<ApprouverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprouverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprouverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
