import { Injectable, Inject } from '@angular/core';
import { Logger } from './logger';
import { APP_CONFIG, AppConfig } from './config.token';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'root';

  constructor(private http: HttpClient) {}

  log(message: string) {
    console.log(`${this.prefix} (experimental): ${message}`);
  }
}
