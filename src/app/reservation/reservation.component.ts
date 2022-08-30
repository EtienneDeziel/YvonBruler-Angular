import { Component, OnInit } from '@angular/core';
import { Reservation } from "../reservation";
import { ReservationServiceService } from '../reservation-service.service'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservations: Reservation[] = [] ;


selectedReservation?: Reservation;
  onSelect(reservation: Reservation): void {
    this.selectedReservation = reservation;
    console.log(reservation);
}

// getReservations(): void {
//   this.reservations = this.reservationService.getReservations();
// }
getReservations(): void {
  this.reservationService.getReservations()
      .subscribe(reservations => this.reservations = reservations);
}



  constructor( private reservationService :ReservationServiceService ) { }

  ngOnInit(): void {
    this.getReservations();
    // pas clair où ça va //
    // this.reservations = this.reservationService.getReservations();
  }

}
