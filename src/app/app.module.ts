import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { REPORTERS } from './reporter.token';
import { BrowserReporterService } from './browser-reporter.service';
import { EngagingReporterService } from './engaging-reporter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: REPORTERS,
      useExisting: BrowserReporterService,
      multi: true
    },
    {
      provide: REPORTERS,
      useExisting: EngagingReporterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
