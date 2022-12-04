import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username=""
  password=""

  readValue=()=>{

    let data :any={"username":this.username,"password":this.password}
   

    if (this.username=="admin" && this.password=="1234") {
      alert("success")

      console.log(data)
      
    } else {
      alert("invalid")
    }
  }

}
