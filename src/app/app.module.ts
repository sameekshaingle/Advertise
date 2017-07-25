import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Navigation} from './components/NavigatonBar/navigation.component'
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent,Navigation  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
