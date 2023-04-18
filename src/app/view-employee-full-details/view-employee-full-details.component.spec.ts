import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeFullDetailsComponent } from './view-employee-full-details.component';

describe('ViewEmployeeFullDetailsComponent', () => {
  let component: ViewEmployeeFullDetailsComponent;
  let fixture: ComponentFixture<ViewEmployeeFullDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeFullDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
