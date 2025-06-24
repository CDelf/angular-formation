import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseLogin } from './if-else-login';

describe('IfElseLogin', () => {
  let component: IfElseLogin;
  let fixture: ComponentFixture<IfElseLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElseLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
