import { createAction, props } from '@ngrx/store';
import { FlightModel } from './flight-store.model';

export const getCurrentFlight = createAction(
  '[Current Flight] GetCurrentFlight',
  props<{ currentFlight: FlightModel | null }>()
);
