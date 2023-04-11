import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { LazyComponent } from './lazy/lazy.component';
import { flightStateFeature } from 'event-lib';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
    StoreModule.forRoot({}),
    StoreModule.forFeature(flightStateFeature),
  ],
  declarations: [FlightsSearchComponent, LazyComponent],
})
export class FlightsModule {}
