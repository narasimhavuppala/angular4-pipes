import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { CamelCasePipePipe } from './camel-case-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CamelCasePipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
