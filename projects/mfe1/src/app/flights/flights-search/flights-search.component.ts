import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthLibService } from 'auth-lib';
import {
  EventLibService,
  FlightModel,
  currentFlightSelector,
  getCurrentFlight,
} from 'event-lib';
import { Subject } from 'rxjs';
import { debounceTime, filter, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css'],
})
export class FlightsSearchComponent implements OnInit, OnDestroy {
  // Add this:
  // user = this.service.user;
  user = this.service.getUserName('user'); // Get user name form Local storage
  formInput$ = new Subject<string | null>();
  unsubscription$ = new Subject<void>();
  // currentFlight$ = this.store.select(currentFlightSelector);
  currentFlight: FlightModel;

  // And add that:
  constructor(
    private service: AuthLibService,
    private eventService: EventLibService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.eventService.flightData.subscribe(flightData => {
      if(flightData)
      this.currentFlight = JSON.parse(flightData);
    })
    this.formInput$
      .pipe(
        filter(Boolean),
        debounceTime(1000),
        takeUntil(this.unsubscription$)
      )
      .subscribe((event: any) => {
        const fromVal = event.target?.value;
        console.log('Emitted From : ', fromVal);
        this.eventService.updateSharedData(fromVal as string);
      });
  }
  ngOnDestroy(): void {
    this.unsubscription$.next();
    this.unsubscription$.complete();
    this.eventService.setFlightData(null);
    localStorage.removeItem('flightData');
  }

  search(): void {
    // this.store.dispatch(
    //   getCurrentFlight({
    //     currentFlight: {
    //       destination: 'Cumilla',
    //       from: 'Dhaka',
    //       name: 'Bangla Aviation F342',
    //     },
    //   })
    // );
    const currentFlight = {
      destination: 'Cumilla',
      from: 'Dhaka',
      name: 'Bangla Aviation F342'
    }
    this.eventService.setFlightData(currentFlight);
  }

  terms(): void {
    alert('Not implemented for this demo!');
  }
}
