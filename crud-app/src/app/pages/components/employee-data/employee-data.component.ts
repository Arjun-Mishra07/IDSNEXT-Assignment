import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent {
  constructor(public _commonService: CommonService) {}
  ngOnInit() {
    this._commonService.EmployeeData = this._commonService.getDataFromLocal('employeeData')
  }
  displayedColumns: string[] = ['Name', 'Designation', 'Salary', 'Action'];
}
