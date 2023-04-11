import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthLibService } from 'auth-lib';
import {
  EventLibService,
  getCurrentFlight,
  selectCurrentFlight,
} from 'event-lib';
import { Subject } from 'rxjs';
import { debounceTime, filter, takeUntil, tap } from 'rxjs/operators';
import { AppState } from '../../app.state';

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
  currentFlight$ = this.store.select(selectCurrentFlight);

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
      .subscribe((event: any) => {
        const fromVal = event.target?.value;
        console.log('Emitted From : ', fromVal);
        this.eventService.updateSharedData(fromVal as string);
      });
  }
  ngOnDestroy(): void {
    this.unsubscription$.next();
    this.unsubscription$.complete();
  }

  search(): void {
    this.store.dispatch(
      getCurrentFlight({
        currentFlight: {
          destination: 'Cumilla',
          from: 'Dhaka',
          name: 'Aviation F342',
        },
      })
    );
  }

  terms(): void {
    alert('Not implemented for this demo!');
  }
}
