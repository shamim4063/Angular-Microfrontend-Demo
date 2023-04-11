import { createAction, props } from '@ngrx/store';
import { FlightModel } from './flight-store.model';

export const getCurrentFlight = createAction(
  '[Current Flight] Get',
  props<{ currentFlight: FlightModel | null }>()
);
