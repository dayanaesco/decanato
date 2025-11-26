import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecanatoTeologia } from './decanato-teologia';

describe('DecanatoTeologia', () => {
  let component: DecanatoTeologia;
  let fixture: ComponentFixture<DecanatoTeologia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecanatoTeologia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecanatoTeologia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
