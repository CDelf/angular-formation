import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormBuilder } from './contact-form-builder';

describe('ContactFormBuilder', () => {
  let component: ContactFormBuilder;
  let fixture: ComponentFixture<ContactFormBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormBuilder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
