import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { flightStateFeature } from 'event-lib';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot({}),
    StoreModule.forFeature(flightStateFeature),
  ],
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
