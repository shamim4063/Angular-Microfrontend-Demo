import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventLibService } from 'event-lib';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
})
export class LazyComponent implements OnInit, OnDestroy {
  unsubscription$ = new Subject<any>();
  constructor(private eventService: EventLibService) {}

  ngOnInit() {
    this.eventService.fromFieldData$
      .pipe(takeUntil(this.unsubscription$))
      .subscribe((x) => console.log('Subscribed in the lazy one of mfe1 ', x));
  }

  ngOnDestroy() {
    this.unsubscription$.next();
    this.unsubscription$.complete();
  }
}
