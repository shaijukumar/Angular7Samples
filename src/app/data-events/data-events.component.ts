import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-events',
  templateUrl: './data-events.component.html',
  styleUrls: ['./data-events.component.scss']
})
export class DataEventsComponent implements OnInit {

  imgURL:string = "";
  colSpan=3;
  isActive =false;
  email:string;
  Title:string;// = "me@test.com";
  Rating:number=1.1234;
  Salary:number=2000;
  price:number = 12.50;
  DOB:Date = new Date(1980,5,16);
  Summary:string = "Every application starts out with what seems like a simple task: get data, transform them, and show them to users. Getting data could be as simple as creating a local variable or as complex as streaming data over a WebSocket.";

  constructor() { }

  ngOnInit() {
    this.imgURL = "https://angular.io/assets/images/logos/angular/angular.svg";
    this.Title = "me@test.com"
  }

  onSave($event){
    $event.stopPropagation();
    this.isActive = !this.isActive;
    console.log($event);
  }
    
  onDivClicked(){   
    console.log("Div clicked");
  }

  onKeyUp($event){
    console.log("enter clicked: " + $event.target.value);
  }

  onKeyUp1(email){
    console.log("email: " + email);
  }

  onKeyUp3(){
    console.log("email: " + this.Title);
  }

  onKeyUp4(){
    console.log("email: " + this.Title);
  }
}
