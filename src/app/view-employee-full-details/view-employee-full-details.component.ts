import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../Service/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-employee-full-details',
  templateUrl: './view-employee-full-details.component.html',
  styleUrls: ['./view-employee-full-details.component.css']
})
export class ViewEmployeeFullDetailsComponent implements OnInit {
empCode: number=0;
employee:Employee=new Employee();

constructor(private route:ActivatedRoute,
  private employeeService:EmployeeService,
  private router:Router){}

ngOnInit(): void {
  this.empCode = this.route.snapshot.params['empCode'];
  console.log(this.empCode);
  this.employeeService.getEmployeeDetailsByEmpCode(this.empCode).subscribe(data => {
    this.employee = data;
  }, error => console.log(error));
}

redirectToEmployeeList() {
  this.router.navigate(["/employees"])
}

}
