import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private getAllEmployeeUrl = "http://localhost:8081/getAllEmployees";
  private saveEmployeesUrl = "http://localhost:8081/saveEmployeeData";
  private getEmployeeByEmpCodeUrl = "http://localhost:8081/getEmployeeByEmpCode";
  private updateEmployeeDetailsUrl = "http://localhost:8081/updateEmpData";
  private deleteEmployeeDetailUrl = "http://localhost:8081/deleteEmployeeData";

  constructor(private httpclient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(`${this.getAllEmployeeUrl}`);
  }

  saveEmployeesDetails(employee: Employee): Observable<object> {
    return this.httpclient.post(`${this.saveEmployeesUrl}`, employee);
  }

  getEmployeeDetailsByEmpCode(empCode: number): Observable<Employee> {
    return this.httpclient.get<Employee>(`${this.getEmployeeByEmpCodeUrl}/${empCode}`);
  }

  updateEmployeeDetails(empCode: number, employee: Employee): Observable<Object> {
    return this.httpclient.put(`${this.updateEmployeeDetailsUrl}/${empCode}`, employee);
  }

  deleteEmployeeDetail(empCode:number):Observable<Object>{
    return this.httpclient.delete(`${this.deleteEmployeeDetailUrl}/${empCode}`)
  }
}
