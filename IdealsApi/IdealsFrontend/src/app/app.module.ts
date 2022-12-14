import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiClient } from '../Nswag/ApiClient';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [ApiClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
