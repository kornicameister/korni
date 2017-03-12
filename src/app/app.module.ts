import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from "@angular/router";
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
    FormsModule,
    HttpModule,
    // application
    BioModule,
    // application
    AppRoutingModule // routing comes last
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
