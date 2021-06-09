import { Injectable } from '@angular/core';
import { Logger } from './logger';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LegacyLogger } from './legacy-logger';

@Injectable({
  providedIn: 'root',
  /** 
   * Because LoggerService and Experimental Logger service implement the same interface, you can use useClass to specify the ExperimentalLogger
   * for any instance of the logger dependency
   * useClass will create NEW INSTANCES
   * useExisting will create an alias, so the service remains as a singleton
   * useValue can be used to create a dependency from an object literal. The object literal must match the interface that the class implements
   * */ 

  //  useClass: ExperimentalLoggerService,
  // useExisting: ExperimentalLoggerService
  useValue: LegacyLogger
})
export class LoggerService implements Logger {
  prefix = 'root';
  constructor() { }

  log( message: string ) {
    console.log(`${this.prefix}: ${message}`);
  }
}
