import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titre } from './titre';

describe('Titre', () => {
  let component: Titre;
  let fixture: ComponentFixture<Titre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Titre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Titre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
