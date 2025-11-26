import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecanatoEconomicas } from './decanato-economicas';

describe('DecanatoEconomicas', () => {
  let component: DecanatoEconomicas;
  let fixture: ComponentFixture<DecanatoEconomicas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecanatoEconomicas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecanatoEconomicas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
