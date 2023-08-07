import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfatComponent } from './alfat.component';

describe('AlfatComponent', () => {
  let component: AlfatComponent;
  let fixture: ComponentFixture<AlfatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlfatComponent]
    });
    fixture = TestBed.createComponent(AlfatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
