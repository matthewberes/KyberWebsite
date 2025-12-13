import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMargin } from './right-margin';

describe('RightMargin', () => {
  let component: RightMargin;
  let fixture: ComponentFixture<RightMargin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightMargin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightMargin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
