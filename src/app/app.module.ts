import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatIconModule, MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    // MatInputModule,
    // MatPaginatorModule,
    // MatProgressSpinnerModule,
    // MatSortModule,
    // MatIconModule,
    // MatButtonModule,
    // MatCardModule,
    // MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
