import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeWithName } from './welcome-with-name';

describe('WelcomeWithName', () => {
  let component: WelcomeWithName;
  let fixture: ComponentFixture<WelcomeWithName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeWithName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeWithName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
