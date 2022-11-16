import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiClient, IApiClient, IWeatherForecast } from '../Nswag/ApiClient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public forecasts?: IWeatherForecast[];

  constructor(private apiClient: ApiClient) {
    
  }
  ngOnInit(): void {
    this.getWeather();
  }

  async getWeather() {
    this.forecasts = await this.apiClient.getWeatherForecast().toPromise();
  }

  title = 'IdealsFrontend';
}


