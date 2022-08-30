import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Reservation } from "./reservation";


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const reservation = [
      { id: 1, name: "Moe", date: new Date(),NbPersonne: 4},
      { id: 2, name: "Ti-guy", date: new Date(),NbPersonne: 6},
      { id: 3, name: "Milou", date: new Date(),NbPersonne: 2}
    ];
    return {reservation};
  }
  // genId(heroes: Reservation[]): number {
  //   return reservation.length > 0 ? Math.max(...reservation.map(hero => reservation.id)) + 1 : 11;
  // }
}
