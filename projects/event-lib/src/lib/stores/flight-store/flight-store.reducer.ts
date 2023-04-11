import { createFeature, createReducer, on } from '@ngrx/store';
import { FlightModel } from './flight-store.model';
import { getCurrentFlight } from './flight-store.action';

export interface FlightState {
  currentFlight: FlightModel | null;
}

export const intialState: FlightState = {
  currentFlight: null,
};

export const flightStateFeature = createFeature({
  name: 'Flight',
  reducer: createReducer<FlightState>(
    intialState,
    on(getCurrentFlight, (state, { currentFlight }) => ({
      ...state,
      currentFlight,
    }))
  ),
});

export const { name, reducer, selectCurrentFlight } = flightStateFeature;
