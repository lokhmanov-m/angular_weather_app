import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import { Subscription } from 'rxjs/Subscription';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit, OnChanges, OnDestroy {

  @Input()newCity: string;
  subscription: Subscription;

  statisticWind: string;
  chartWind: any;

  statisticTemp: string;
  chartTemp: any;

  statisticPressure: string;
  chartPressure: any;

  statisticHumidity: string;
  chartHumidity: any;

  location = {
    city: 'London',
    cnt: '16'
  };

  constructor( private weatherService: WeatherService) { }

  ngOnInit() {
    this.statisticTemp = 'statisticTempOpen';
    this.statisticWind = 'statisticWindClose';
    this.statisticPressure = 'statisticPressureClose';
    this.statisticHumidity = 'statisticHumidityClose';
    this.subscription = this.weatherService.getWeatherForecast(this.location.city, this.location.cnt)
      .subscribe(response => {

      const wind = response['list'].map(res => res.wind.speed);
      const temp = response['list'].map(res => res.main.temp);
      const pressure = response['list'].map(res => res.main.pressure);
      const humidity = response['list'].map(res => res.main.humidity);
      const alldates = response['list'].map(res => res.dt);

      const weatherDates = [];
      alldates.forEach((res) => {
        const jsdate = new Date(res * 1000);
        weatherDates.push(jsdate
          .toLocaleTimeString('en', {month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'}));
      });

        this.chartWind = new Chart('canvasWind', {
          type: 'bar',
          data: {
            labels: weatherDates,
            datasets: [{
              lable: 'Wind',
              data: wind,
              borderColor: '#ff9191',
              backgroundColor: '#ff9191',
              fill: false
            }]
          },
          options: {
            legend: {
              display: false,
            },
            scalse: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });

        this.chartTemp = new Chart('canvasTemp', {
          type: 'bar',
          data: {
            labels: weatherDates,
            datasets: [{
              lable: 'Temperature',
              data: temp,
              borderColor: '#ff9191',
              backgroundColor: '#ff9191',
              fill: false
            }]
          },
          options: {
            legend: {
              display: false,
            },
            scalse: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });

        this.chartPressure = new Chart('canvasPressure', {
          type: 'bar',
          data: {
            labels: weatherDates,
            datasets: [{
              lable: 'Pressure',
              data: pressure,
              borderColor: '#ff9191',
              backgroundColor: '#ff9191',
              fill: false
            }]
          },
          options: {
            legend: {
              display: false,
            },
            scalse: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });

        this.chartHumidity = new Chart('canvasHumidity', {
          type: 'bar',
          data: {
            labels: weatherDates,
            datasets: [{
              lable: 'Humidity',
              data: humidity,
              borderColor: '#ff9191',
              backgroundColor: '#ff9191',
              fill: false
            }]
          },
          options: {
            legend: {
              display: false,
            },
            scalse: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });

    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.newCity && !changes.newCity.isFirstChange()) {
      this.location = {
        city: this.newCity,
        cnt: '16'
      };

      this.subscription = this.weatherService.getWeatherForecast(this.location.city, this.location.cnt)
        .subscribe(response => {

        const wind = response['list'].map(res => res.wind.speed);
        const temp = response['list'].map(res => res.main.temp);
        const pressure = response['list'].map(res => res.main.pressure);
        const humidity = response['list'].map(res => res.main.humidity);
        const alldates = response['list'].map(res => res.dt);

        const weatherDates = [];
        alldates.forEach((res) => {
          const jsdtae = new Date(res * 1000);
          weatherDates.push(jsdtae
            .toLocaleTimeString('en', {month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'}));
        });

          this.chartWind = new Chart('canvasWind', {
            type: 'bar',
            data: {
              labels: weatherDates,
              datasets: [{
                lable: 'Wind',
                data: wind,
                borderColor: '#ff9191',
                backgroundColor: '#ff9191',
                fill: false
              }]
            },
            options: {
              legend: {
                display: false,
              },
              scalse: {
                xAxes: [{
                  display: true
                }],
                yAxes: [{
                  display: true
                }]
              }
            }
          });

        this.chartTemp = new Chart('canvasTemp', {
          type: 'bar',
          data: {
            labels: weatherDates,
            datasets: [{
              lable: 'Temperature',
              data: temp,
              borderColor: '#ff9191',
              backgroundColor: '#ff9191',
              fill: false
            }]
          },
          options: {
            legend: {
              display: false,
            },
            scalse: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });

        this.chartPressure = new Chart('canvasPressure', {
          type: 'bar',
          data: {
            labels: weatherDates,
            datasets: [{
              lable: 'Pressure',
              data: pressure,
              borderColor: '#ff9191',
              backgroundColor: '#ff9191',
              fill: false
            }]
          },
          options: {
            legend: {
              display: false,
            },
            scalse: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });

        this.chartHumidity = new Chart('canvasHumidity', {
          type: 'bar',
          data: {
            labels: weatherDates,
            datasets: [{
              lable: 'Humidity',
              data: humidity,
              borderColor: '#ff9191',
              backgroundColor: '#ff9191',
              fill: false
            }]
          },
          options: {
            legend: {
              display: false,
            },
            scalse: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });
      });

      this.chartWind.destroy();
      this.chartTemp.destroy();
      this.chartPressure.destroy();
      this.chartHumidity.destroy();
    }
  }

  showWind() {
    this.statisticTemp = 'statisticTempClose';
    this.statisticPressure = 'statisticPressureClose';
    this.statisticHumidity = 'statisticHumidityClose';
    this.statisticWind = 'statisticWindOpen';
  }

  showTemp() {
    this.statisticWind = 'statisticWindClose';
    this.statisticPressure = 'statisticPressureClose';
    this.statisticHumidity = 'statisticHumidityClose';
    this.statisticTemp = 'statisticTempOpen';
  }

  showPressure() {
    this.statisticWind = 'statisticWindClose';
    this.statisticTemp = 'statisticTempClose';
    this.statisticHumidity = 'statisticHumidityClose';
    this.statisticPressure = 'statisticPressureOpen';
  }

  showHumidity() {
    this.statisticWind = 'statisticWindClose';
    this.statisticTemp = 'statisticTempClose';
    this.statisticPressure = 'statisticPressureClose';
    this.statisticHumidity = 'statisticHumidityShow';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
