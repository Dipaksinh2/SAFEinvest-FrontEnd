import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../Service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-employee-data',
  templateUrl: './save-employee-data.component.html',
  styleUrls: ['./save-employee-data.component.css']
})
export class SaveEmployeeDataComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private router:Router) { }
  ngOnInit(): void {

  }

  saveEmployee() {
    this.employeeService.saveEmployeesDetails(this.employee).subscribe(data => {
      console.log(data);
      this.redirectToEmployeeList();
    },
      error => console.log(error));
  }

  redirectToEmployeeList(){
this.router.navigate(["/employees"])
  }
  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
}
