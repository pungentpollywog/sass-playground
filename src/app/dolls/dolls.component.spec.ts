import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollsComponent } from './dolls.component';

describe('DollsComponent', () => {
  let component: DollsComponent;
  let fixture: ComponentFixture<DollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DollsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
