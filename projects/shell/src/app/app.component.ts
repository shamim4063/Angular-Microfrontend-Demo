import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthLibService } from 'auth-lib';
import { EventLibService, FlightModel, currentFlightSelector } from 'event-lib';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'shell';
  unsubscription$ = new Subject<void>();
  // currentFlight$ = this.store.select(currentFlightSelector);
  currentFlight: FlightModel;

  constructor(
    private service: AuthLibService,
    private eventService: EventLibService,
    private store: Store
  ) {
    //this.service.login('Mehedi', null);
    this.service.setUserName('user', 'Mehedi'); // Set user name to local storage
  }

  ngOnInit() {
    this.eventService.flightData.subscribe(flightData => {
      if (flightData)
      this.currentFlight = JSON.parse(flightData);
    })
    this.eventService.fromFieldData$
      .pipe(takeUntil(this.unsubscription$))
      .subscribe((x) => console.log('Subscribed From Shell ', x));
  }

  ngOnDestroy(): void {
    this.unsubscription$.next();
    this.unsubscription$.complete();
  }
}
