import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionCreateComponent } from './division-create.component';

describe('DivisionCreateComponent', () => {
  let component: DivisionCreateComponent;
  let fixture: ComponentFixture<DivisionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
