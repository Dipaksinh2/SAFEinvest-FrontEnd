import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEmployeeDataComponent } from './save-employee-data.component';

describe('SaveEmployeeDataComponent', () => {
  let component: SaveEmployeeDataComponent;
  let fixture: ComponentFixture<SaveEmployeeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveEmployeeDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
