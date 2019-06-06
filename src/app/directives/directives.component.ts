import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  condition:boolean=true;
  courses = [ {id:1, name:'courses1'},
              {id:2, name:'courses2'},
              {id:3, name:'courses3'},
              {id:4, name:'courses4'},];


task ={};

  constructor() { 
    debugger;
  }

  ngOnInit() {
  }

  
 
}
