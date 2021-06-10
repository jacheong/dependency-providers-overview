import { Component, Injector, inject } from '@angular/core';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { APP_CONFIG, AppConfig } from './config.token';
import { LegacyLogger } from './legacy-logger';

export function loggerFactory(injector: Injector): ExperimentalLoggerService | LoggerService {
  /**
   * Changing the value of experimentalEnabled in APP_CONFIG will change which dependency to use
   */
  return injector.get(APP_CONFIG).experimentalEnabled ?
  injector.get(ExperimentalLoggerService) :
  injector.get(LoggerService);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: LoggerService,
      useFactory: loggerFactory,
      deps: [Injector]
    }

    /**
     * Mutliple providers for the same dependency below:
     * use case is where one service needs functionality from two very DIFFERENT services
     */
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
