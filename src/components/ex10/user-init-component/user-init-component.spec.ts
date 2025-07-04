import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInitComponent } from './user-init-component';

describe('UserInitComponent', () => {
  let component: UserInitComponent;
  let fixture: ComponentFixture<UserInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
