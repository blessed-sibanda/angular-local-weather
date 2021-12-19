import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) {
    this.current = {
      city: 'Gweru',
      country: 'ZW',
      date: new Date(),
      image: 'assets/img/sunny.svg',
      temperature: 25,
      description: 'sunny',
    };
  }

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather('Gweru', 'ZW')
      .subscribe((data) => (this.current = data));
  }
}
