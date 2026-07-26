import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCertificate } from './add-certificate';

describe('AddCertificate', () => {
  let component: AddCertificate;
  let fixture: ComponentFixture<AddCertificate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCertificate],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCertificate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
