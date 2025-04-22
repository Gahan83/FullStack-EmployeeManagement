import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './models/User';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
http =inject(HttpClient)
employeeList: any[]=[];
employeeObj:any={
    "employeeId":0 ,
    "firstName": "",
    "lastName": "",
    "email": "",
    "contactNo": "",
    "city": "",
    "address": ""
}
  ngOnInit(): void {
    this.getAllEmployee();
  }

  public getAllEmployee()
  {
    this.http.get('https://localhost:7267/api/EmployeeMaster').subscribe((res:any)=>{
      this.employeeList=res;
    })
  }

  public onSave()
  {
    this.http.post('https://localhost:7267/api/EmployeeMaster',this.employeeObj).subscribe((res:any)=>{
      this.getAllEmployee();
    })
  }
  public onEdit()
  {
    this.http.put('https://localhost:7267/api/EmployeeMaster'+this.employeeObj.employeeId, this.employeeObj).subscribe((res:any)=>{
      this.getAllEmployee();
    })
  }
  public onDelete(data:any)
  {
    const isDelete=confirm("Are you sure you want to delete this record?");
    if(isDelete)
      {
      this.http.delete('https://localhost:7267/api/EmployeeMaster/'+data.employeeId).subscribe((res:any)=>{
        this.getAllEmployee();
      })
    }
  }


}
