import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// application module imports
import { BioModule } from './bio/bio.module';
import { AppRoutingModule } from './app.routing';
// application module imports

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    // application
    BioModule,
    // application
    AppRoutingModule // routing comes last
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Location,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: APP_BASE_HREF, useValue: '/km'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
