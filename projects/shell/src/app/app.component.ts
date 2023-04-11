import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthLibService } from 'auth-lib';
import { EventLibService, selectCurrentFlight } from 'event-lib';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'shell';
  unsubscription$ = new Subject<void>();
  currentFlight$ = this.store.select(selectCurrentFlight);

  constructor(
    private service: AuthLibService,
    private eventService: EventLibService,
    private store: Store
  ) {
    this.service.login('Max', null);
  }

  ngOnInit() {
    this.eventService.fromFieldData$
      .pipe(takeUntil(this.unsubscription$))
      .subscribe((x) => console.log('Subscribed From Shell ', x));
  }

  ngOnDestroy(): void {
    this.unsubscription$.next();
    this.unsubscription$.complete();
  }
}
