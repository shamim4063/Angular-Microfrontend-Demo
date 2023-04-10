import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventLibService {
  private _fromFieldData$ = new BehaviorSubject<string>('');

  get fromFieldData$() {
    return this._fromFieldData$.asObservable();
  }

  updateSharedData(data: string) {
    this._fromFieldData$.next(data);
  }
}
