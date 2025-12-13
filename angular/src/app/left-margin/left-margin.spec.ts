import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMargin } from './left-margin';

describe('LeftMargin', () => {
  let component: LeftMargin;
  let fixture: ComponentFixture<LeftMargin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftMargin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftMargin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
