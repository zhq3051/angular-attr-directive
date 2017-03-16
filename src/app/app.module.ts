import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { HightLightDirective} from './highlight.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HightLightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
