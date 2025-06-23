import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverBox } from './hover-box';

describe('HoverBox', () => {
  let component: HoverBox;
  let fixture: ComponentFixture<HoverBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
