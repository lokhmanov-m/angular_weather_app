import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TemperatureNowComponent } from './components/home/temperature-now/temperature-now.component';
import { StatisticComponent } from './components/home/statistic/statistic.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WeatherService } from './services/weather.service';
import { AppRoutingModule } from './router/router';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TemperatureNowComponent,
    HomeComponent,
    StatisticComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    AppRoutingModule,
    WeatherService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
