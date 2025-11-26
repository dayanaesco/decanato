import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecanatoJurisprudencia } from './decanato-jurisprudencia';

describe('DecanatoJurisprudencia', () => {
  let component: DecanatoJurisprudencia;
  let fixture: ComponentFixture<DecanatoJurisprudencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecanatoJurisprudencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecanatoJurisprudencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
