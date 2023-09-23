import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  formGrp = {
    Name: "",
    Designation: "",
    Salary: "",
  }
  EmployeeData:{Name:string, Designation:string, Salary:number}[] = []
  saveDataToLocal(key:string, data:any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getDataFromLocal(key:string) {
   return JSON.parse(localStorage.getItem(key) || "[]")
  }
  deleteData(index:number) {
    this.EmployeeData.splice(index, 1);
    this.saveDataToLocal('employeeData', this.EmployeeData);
    this.EmployeeData = this.getDataFromLocal('employeeData');
  }
}
