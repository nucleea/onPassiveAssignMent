import { validaters } from './../validate';
import { Component } from '@angular/core';

@Component({
  selector: 'app-RegisterUser',
  templateUrl: './RegisterUser.component.html',
  styleUrls: ['./RegisterUser.component.css']
})
export class RegisterUserComponent {
public userdata = new UserReg();

  constructor(public v:validaters) {
    this.userdata = new UserReg();
  }

  submit() {
    if(this.userdata.Fname == "") {
      alert("Please enter First name");
      return false;
    }
    if(this.userdata.Lname == "") {
      alert("Please enter Last name");
      return false;
    }
    if(this.userdata.Email == "") {
      alert("Please enter Email");
      return false;
    }
    if(this.userdata.password == "") {
      alert("Please enter password");
      return false;
    }
    if(this.userdata.Cpassword == "") {
      alert("Please enter Confirm Password");
      return false;
    }
    if(this.userdata.numb == "") {
      alert("Please enter Mobile Number");
      return false;
    }
    

    if(!this.userdata.Fname.match(this.v.V_name)) {
      alert("Please enter valid First name");
      return false;
    }
    if(!this.userdata.Lname.match(this.v.V_name)) {
      alert("Please enter  valid Last name");
      return false;
    }
    if(!this.userdata.Email.match(this.v.V_email)) {
      alert("Please enter  valid Email ID");
      return false;
    }
    if(!this.userdata.numb.match(this.v.V_mob)) {
      alert("Please enter  valid Mobile Number");
      return false;
    }

    if(this.userdata.password != this.userdata.Cpassword) {
      alert("your Confirm Password isn't match with password");
      return false;
    }

    sessionStorage.setItem('Data', JSON.stringify(this.userdata));
    this.userdata = new UserReg();

    alert("Data submitted successfully");
  }
}

class UserReg {
  public Fname:any = "";
  public Lname:any = ""
  public Email:any = ""
  public password:any = ""
  public Cpassword:any = ""
  public numb:any = ""
  
}
