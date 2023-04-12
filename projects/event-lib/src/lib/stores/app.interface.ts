import { FlightModel, FlightState } from './flight-store';

export interface AppState {
  currentFlight: FlightModel;
}

export const currentFlight = 'currentFlight';
