import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FlightModel } from './stores/flight-store';
import { FlightsModule } from 'projects/mfe1/src/app/flights/flights.module';

@Injectable({
  providedIn: 'root',
})
export class EventLibService {
  private _fromFieldData$ = new BehaviorSubject<string>('');
  private _flightData$ = new BehaviorSubject<string>('');

  get fromFieldData$() {
    return this._fromFieldData$.asObservable();
  }

  updateSharedData(data: string) {
    this._fromFieldData$.next(data);
  }

  storeFlightData(data: FlightModel) {
    localStorage.setItem('flightData', JSON.stringify(data));
    this._flightData$.next(localStorage.getItem('flightData'));
  }

  get flightData() {
    return this._flightData$.asObservable();
  }
}
