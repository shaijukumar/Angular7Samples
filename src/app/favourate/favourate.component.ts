import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favourate',
  templateUrl: './favourate.component.html',
  styleUrls: ['./favourate.component.scss']
})
export class FavourateComponent implements OnInit {

  @Input('is-favourite') isFavourite:boolean;
  @Input('fav-title') title:string = "Fav:";
  
  @Output('fav-change') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onClick(){   
    this.isFavourite = !this.isFavourite;
    this.change.emit({ newValue: this.isFavourite });
  }

}

export interface FavouriteChangedEventArgs{
  newValue:boolean
}
