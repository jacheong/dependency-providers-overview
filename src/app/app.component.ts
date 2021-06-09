import { Component } from '@angular/core';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { APP_CONFIG, AppConfig } from './config.token';
import { config } from 'process';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: LoggerService,
      useFactory: (config: AppConfig, http: HttpClient) => {
        return config.experimentalEnabled ? 
          new ExperimentalLoggerService(http) :
          new LoggerService()
      },
      /**
       * Changing the value of experimentalEnabled in APP_CONFIG will change which dependency to use
       */
      deps: [APP_CONFIG, HttpClient]
    }
  ]
})
export class AppComponent {
  title = 'dependency-providers';
  constructor(
    private logger: LoggerService,
    private experimentalLoggerService: ExperimentalLoggerService
  ) {
    if (this.logger) {
      this.logger.prefix = 'app component';
      this.logger.log('component init');
    }
    console.log('is instance the same: ', this.logger === this.experimentalLoggerService);
  }
}
