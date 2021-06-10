import { Injectable, Inject } from '@angular/core';
import { Logger } from './logger';
import { APP_CONFIG, AppConfig } from './config.token';
import { HttpClient } from '@angular/common/http';
import { REPORTERS } from './reporter.token';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'root';

  constructor(
    private http: HttpClient,
    @Inject(REPORTERS) private reporters: ReadonlyArray<Reporter>
  ) {}

  log(message: string): void {
    this.reporters.forEach( r => r.report() );
    console.log(`${this.prefix} (experimental): ${message}`);
  }
}
