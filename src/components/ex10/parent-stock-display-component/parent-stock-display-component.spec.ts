import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentStockDisplayComponent } from './parent-stock-display-component';

describe('ParentStockDisplayComponent', () => {
  let component: ParentStockDisplayComponent;
  let fixture: ComponentFixture<ParentStockDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentStockDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentStockDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
