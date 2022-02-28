import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormActionsComponent } from './generic-form-actions.component';

describe('GenericFormActionsComponent', () => {
  let component: GenericFormActionsComponent;
  let fixture: ComponentFixture<GenericFormActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericFormActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
