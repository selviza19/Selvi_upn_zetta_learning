import { ComponentFixture, TestBed } from '@angular/core/testing';

import { employeComponent } from './employe.component';

describe('EmployeComponent', () => {
  let component: employeComponent;
  let fixture: ComponentFixture<employeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ employeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(employeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
