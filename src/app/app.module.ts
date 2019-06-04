import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataEventsComponent } from './data-events/data-events.component';

import { FormsModule } from'@angular/forms';
import { SummaryPipe } from './summary.pipes';

@NgModule({
  declarations: [
    SummaryPipe,
    AppComponent,
    DataEventsComponent
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
