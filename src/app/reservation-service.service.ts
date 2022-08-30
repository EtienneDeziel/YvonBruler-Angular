import { Injectable } from '@angular/core';
import { Reservation } from './reservation';
import { RESERVATIONS  } from "./mock-reservation";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {

  // getReservations(): Reservation[] {
  //   return RESERVATIONS;
  // }

  getReservations(): Observable<Reservation[]> {
    const reservations = of(RESERVATIONS);
    return reservations;
  }

  constructor() { }
}
