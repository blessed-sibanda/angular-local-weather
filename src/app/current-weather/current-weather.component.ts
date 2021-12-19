import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor() {
    this.current = {
      city: 'Gweru',
      country: 'ZW',
      date: new Date(),
      image: 'assets/img/sunny.svg',
      temperature: 20,
      description: 'overcast',
    };
  }

  ngOnInit(): void {}
}
