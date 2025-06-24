import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAcess } from './user-acess';

describe('UserAcess', () => {
  let component: UserAcess;
  let fixture: ComponentFixture<UserAcess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAcess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAcess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
