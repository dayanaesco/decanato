import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecanatoHumanidades } from './decanato-humanidades';

describe('DecanatoHumanidades', () => {
  let component: DecanatoHumanidades;
  let fixture: ComponentFixture<DecanatoHumanidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecanatoHumanidades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecanatoHumanidades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
