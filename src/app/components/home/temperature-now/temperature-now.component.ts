import {Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-temperature-now',
  templateUrl: './temperature-now.component.html',
  styleUrls: ['./temperature-now.component.scss']
})
export class TemperatureNowComponent implements OnInit, OnChanges, OnDestroy {

  @Input()newCity: string;
  subscription: Subscription;
  weatherToday: any;
  currentDate: Date;
  location = {
    city: 'London',
  };

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.currentDate = new Date();
    this.subscription = this.weatherService.getWeatherToday(this.location.city)
      .subscribe((response) => {
      this.weatherToday = response;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
      if (changes.newCity && !changes.newCity.isFirstChange()) {
        this.location = {
          city: this.newCity
        };

        this.subscription = this.weatherService.getWeatherToday(this.location.city)
          .subscribe((response) => {
          this.weatherToday = response;
        });
      }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


