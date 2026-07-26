import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCertificate } from './edit-certificate';

describe('EditCertificate', () => {
  let component: EditCertificate;
  let fixture: ComponentFixture<EditCertificate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCertificate],
    }).compileComponents();

    fixture = TestBed.createComponent(EditCertificate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
