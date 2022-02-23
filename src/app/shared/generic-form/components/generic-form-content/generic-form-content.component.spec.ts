import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormContentComponent } from './generic-form-content.component';

describe('GenericFormContentComponent', () => {
  let component: GenericFormContentComponent;
  let fixture: ComponentFixture<GenericFormContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericFormContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
