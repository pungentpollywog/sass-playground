import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanillaCssComponent } from './vanilla-css.component';

describe('VanillaCssComponent', () => {
  let component: VanillaCssComponent;
  let fixture: ComponentFixture<VanillaCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanillaCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanillaCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
