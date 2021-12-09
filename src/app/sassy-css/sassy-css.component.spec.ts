import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassyCssComponent } from './sassy-css.component';

describe('SassyCssComponent', () => {
  let component: SassyCssComponent;
  let fixture: ComponentFixture<SassyCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SassyCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SassyCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
