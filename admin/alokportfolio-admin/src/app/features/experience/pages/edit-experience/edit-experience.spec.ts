import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExperience } from './edit-experience';

describe('EditExperience', () => {
  let component: EditExperience;
  let fixture: ComponentFixture<EditExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditExperience],
    }).compileComponents();

    fixture = TestBed.createComponent(EditExperience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
