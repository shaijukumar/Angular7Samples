import { Component } from '@angular/core';
import {FavouriteChangedEventArgs} from './favourate/favourate.component'
import { from } from 'rxjs';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular7Samples';

  post = {
    title:"Title1",
    isFavourite:true
  }


  onFavouriteChanged(eventArgs:FavouriteChangedEventArgs ){
    alert("onFavouriteChanged - " + eventArgs.newValue);
  }
}
