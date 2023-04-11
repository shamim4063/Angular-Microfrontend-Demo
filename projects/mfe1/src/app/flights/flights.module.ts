import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { LazyComponent } from './lazy/lazy.component';
import { EventLibModule } from 'event-lib';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
    EventLibModule,
  ],
  declarations: [FlightsSearchComponent, LazyComponent],
})
export class FlightsModule {}
