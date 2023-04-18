import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../Service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee-details',
  templateUrl: './update-employee-details.component.html',
  styleUrls: ['./update-employee-details.component.css']
})
export class UpdateEmployeeDetailsComponent implements OnInit {

  employee: Employee = new Employee();
  empCode: number = 0;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.empCode = this.route.snapshot.params['empCode'];
    console.log(this.empCode);
    this.employeeService.getEmployeeDetailsByEmpCode(this.empCode).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.employeeService.updateEmployeeDetails(this.empCode, this.employee).subscribe(data => {
      this.redirectToEmployeeList();
    }, error => console.log(error));
  }

  redirectToEmployeeList() {
    this.router.navigate(["/employees"])
  }

}
