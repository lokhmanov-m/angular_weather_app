import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {
  private url = environment.baseUrl;
  private apiID = environment.apiID;
  private units = environment.units;

  constructor( private http: HttpClient) {}

  getWeatherToday(city: string) {
    const urlWeatherNow = `${this.url}weather?q=${city}&appid=${this.apiID}&units=${this.units}`;
     return this.http.get(urlWeatherNow);
  }

  getWeatherForecast(city: string, cnt: string) {
    const urlWeatherForecast = `${this.url}forecast?q=${city}&appid=${this.apiID}&units=${this.units}&cnt=${cnt}`;
    return this.http.get(urlWeatherForecast);
  }
}
