import { createFeatureSelector, createSelector } from '@ngrx/store';
import { currentFlight } from '../app.interface';
import { FlightState } from './flight-store.reducer';

const selectCurrentFlight = createFeatureSelector<FlightState>(currentFlight);

export const currentFlightSelector = createSelector(
  selectCurrentFlight,
  (state: FlightState) => state.currentFlight
);
