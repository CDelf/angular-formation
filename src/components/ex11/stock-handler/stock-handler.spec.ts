import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHandler } from './stock-handler';

describe('StockHandler', () => {
  let component: StockHandler;
  let fixture: ComponentFixture<StockHandler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockHandler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
