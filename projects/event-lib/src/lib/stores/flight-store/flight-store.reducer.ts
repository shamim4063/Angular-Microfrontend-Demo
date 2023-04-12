import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { FlightModel } from './flight-store.model';
import { getCurrentFlight } from './flight-store.action';
import { currentFlight } from '../app.interface';

export interface FlightState {
  currentFlight: FlightModel | null;
}

export const intialState: FlightState = {
  currentFlight: null,
};

export const flightReducer = createReducer<FlightState>(
  intialState,
  on(getCurrentFlight, (state, { currentFlight }) => ({
    ...state,
    currentFlight,
  }))
);

// export const flightStateFeature = createFeature({
//   name: 'Flight',
//   reducer: createReducer<FlightState>(
//     intialState,
//     on(getCurrentFlight, (state, { currentFlight }) => ({
//       ...state,
//       currentFlight,
//     }))
//   ),
// });

// export const { name, reducer, selectCurrentFlight } = flightStateFeature;
