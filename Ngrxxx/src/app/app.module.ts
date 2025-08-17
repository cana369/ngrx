import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CounterComponent } from './counter/counter.component';
import { HeaderComponent } from './header/header.component';
import { CounterValueComponent } from './counter/counter-value/counter-value.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CounterComponent,
    HeaderComponent,
    CounterValueComponent,
    CounterButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
