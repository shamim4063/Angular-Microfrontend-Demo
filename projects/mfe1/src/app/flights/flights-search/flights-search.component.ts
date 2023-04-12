import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  user = this.service.user;
  formInput$ = new Subject<string | null>();
  unsubscription$ = new Subject<void>();
  currentFlight$ = this.store.select(currentFlightSelector);
  flight = new FlightFormModel();

  // And add that:
  constructor(
    private service: AuthLibService,
    private eventService: EventLibService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.formInput$
      .pipe(
        filter(Boolean),
        debounceTime(1000),
        takeUntil(this.unsubscription$)
      )
      .subscribe((from: string) => {
        this.eventService.updateSharedData(from);
      });
  }
  ngOnDestroy(): void {
    this.unsubscription$.next();
    this.unsubscription$.complete();
  }

  submit(form: NgForm): void {
    if (form.valid) {
      this.store.dispatch(
        getCurrentFlight({
          currentFlight: {
            name: this.flight.name,
            destination: this.flight.destination,
            from: this.flight.from,
          },
        })
      );
      form.resetForm();
      this.flight = new FlightFormModel();
    }
  }

  terms(): void {
    alert('Not implemented for this demo!');
  }
}

export class FlightFormModel {
  name: string;
  from: string;
  destination: string;
}
