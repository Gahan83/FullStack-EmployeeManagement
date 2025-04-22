import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './models/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  public isNewUser: boolean = false;
  userObj: User = new User();
  userList:User[]=[];
  localValue:string='user';

  ngOnInit(): void {
    const localData = localStorage.getItem(this.localValue);
    if(localData)
    {
      this.userList = JSON.parse(localData);
    }
  }

  changeUserStatus(isEditing:boolean=false) {
    this.isNewUser = !this.isNewUser;
    if(!isEditing)
    {
      this.userObj = new User();
    }
  }

  onSave(){
    this.userObj.userId=this.userList.length+1;
    // if(this.userList.length==0)
    // {
      this.userList.push(this.userObj);
    //}
    this.userObj = new User();
    this.fetchLocalStorage();
    this.changeUserStatus();
  }

  onEdit(data:User)
  {
    this.userObj={...data};
    this.changeUserStatus(true);
  }

  onUpdate(){
    const record= this.userList.find(x=>x.userId==this.userObj.userId);
    if(record !=undefined)
    {
      record.fName=this.userObj.fName;
      record.lName=this.userObj.lName;
      record.uName=this.userObj.uName;
      record.city=this.userObj.city;
      record.zipCode=this.userObj.zipCode;
      record.state=this.userObj.state;
      record.isAgree=this.userObj.isAgree;
    }
    this.fetchLocalStorage();
    this.changeUserStatus();
  }

  onDelete(userId:number)
  {
    const isDelete=confirm('Are you sure you want to delete?');
    if(isDelete)
    {
      const index=this.userList.findIndex(x=>x.userId==userId);
      this.userList.splice(index,1);
      this.fetchLocalStorage();
    }
  }

  private fetchLocalStorage() {
    localStorage.setItem(this.localValue, JSON.stringify(this.userList));
  }
}
