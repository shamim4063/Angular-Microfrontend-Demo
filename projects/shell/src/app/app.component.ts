import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { EventLibService } from 'event-lib';
import { Subject } from 'rxjs';
import { takeUntil, first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'shell';
  unsubscription$ = new Subject<void>();

  constructor(
    private service: AuthLibService,
    private eventService: EventLibService
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
