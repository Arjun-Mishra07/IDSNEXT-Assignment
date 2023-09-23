import { Component } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {
  constructor(public toaster: MatSnackBar, public _commonService:CommonService) {}

  Designations = [
    "Manager",
    "Software Engineer",
    "Senior Software Engineer",
    "Tech Lead"
  ]

  SaveData() {
    if(!this._commonService.formGrp.Name) {
      this.toaster.open("Name is required", "", {
        duration: 2 * 1000
      });
      return;
    }
    if(!this._commonService.formGrp.Designation) {
      this.toaster.open("Designation is required", "", {
        duration: 2 * 1000
      });
      return;
    }
    if(!this._commonService.formGrp.Salary) {
      this.toaster.open("Salary is required", "", {
        duration: 2 * 1000
      });
      return;
    }
    let getData = this._commonService.getDataFromLocal('employeeData') || [];
    getData.push(this._commonService.formGrp)
    this._commonService.saveDataToLocal('employeeData', getData);
    this._commonService.EmployeeData = getData;
    this.resetForm();
  }
  resetForm() {
    this._commonService.formGrp = {
      Name : "",
      Designation: "",
      Salary: "",
    }
  }
}
