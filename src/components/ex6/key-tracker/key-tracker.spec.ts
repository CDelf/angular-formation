import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyTracker } from './key-tracker';

describe('KeyTracker', () => {
  let component: KeyTracker;
  let fixture: ComponentFixture<KeyTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyTracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
