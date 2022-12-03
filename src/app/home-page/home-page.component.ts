import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  fullname=""
  mail=""
  message=""

  readValue=()=>{

   let data:any={"fullname":this.fullname,"mail":this.mail,"message":this.message}
  }


}
