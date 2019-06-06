import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  title="ng7Forms";

  user= {
   name:"",
   firstName :""
  };

  temp=true;
  constructor() { }

  ngOnInit() {
    
  }

  onfirstNameChange(){
    alert('1')
    debugger;
    //console.log(firstName);
  }

  onSubmit(e){
    debugger;
    console.log(e);
  }

}
