import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'anusha';
  formData = {
    name: null,
    email: null,
    phone: null,
   
  }
  private data;
  private data1;
  lableData = {
    name: "Enter Name",
    email: " Enter Email",
    phone: "Enter Phone",
    
  }


  nameOutput(data) {
    this.formData.name = data;
  }
  emailOutput(data) {
    this.formData.email = data;
  }
  phoneOutput(data) {
    this.formData.phone = data;
  }
  
  createAccount(data) {
    console.log(this.formData);
  }
 
  ngOnInit() {
  
  }
}
