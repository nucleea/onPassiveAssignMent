import { Component } from '@angular/core';

@Component({
  selector: 'app-forget',
  templateUrl: './ForgetPassword.component.html',
  styleUrls: ['./ForgetPassword.component.css']
})
export class ForgetComponent {

  capCheck:any = "";
  Cpassword:any = "";
  npassword:any = "";

  public num1:any= Math.floor(Math.random() * 10);
  public num2:any= Math.floor(Math.random() * 10);


  submit() {
    

    if(this.npassword == "" || this.Cpassword == "") {
      alert("password should not be blank")
      return false;
    }

    

    if(this.npassword != this.Cpassword) {
      alert("password is not matched with confirm password")
      return false;
    }
    if(parseInt(this.num1) + parseInt(this.num2) != this.capCheck) {
      alert("Invalid Captcha Code");
      this.capCheck = "";
    return false;
    }

    this.capCheck = "";
    this.Cpassword = "";
    this.npassword = "";
    alert("Password changed successfully");



  }
}
