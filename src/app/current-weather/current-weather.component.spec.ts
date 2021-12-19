import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';
import { WeatherService } from '../weather/weather.service';
import { of } from 'rxjs';
import { fakeWeather } from '../weather/weather.service.fake';
import { By } from '@angular/platform-browser';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;
  let weatherServiceMock: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
      'getCurrentWeather',
    ]);
    await TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [{ provide: WeatherService, useValue: weatherServiceSpy }],
    }).compileComponents();
    weatherServiceMock = TestBed.inject(
      WeatherService
    ) as jasmine.SpyObj<WeatherService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    weatherServiceMock.getCurrentWeather.and.returnValue(of());
    fixture.detectChanges(); // triggers ngOnInit
    expect(component).toBeTruthy();
  });

  it('should get currentWeather from weatherService', () => {
    weatherServiceMock.getCurrentWeather.and.returnValue(of());
    fixture.detectChanges();
    expect(weatherServiceMock.getCurrentWeather).toHaveBeenCalledTimes(1);
  });

  it('should eagerly load currentWeather in Gweru from weatherService', () => {
    weatherServiceMock.getCurrentWeather.and.returnValue(of(fakeWeather));
    fixture.detectChanges();

    expect(component.current).toBeDefined();
    expect(component.current?.city).toEqual('Gweru');
    expect(component.current?.temperature).toEqual(16);

    // Assert on DOM
    const debugEl = fixture.debugElement;
    const titleEl: HTMLElement = debugEl.query(By.css('span')).nativeElement;
    expect(titleEl.textContent).toContain('Gweru');
  });
});
