import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EquipeComponent } from './equipe/equipe.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path: 'equipe', component:EquipeComponent },
  { path: 'menu', component:MenuComponent },
  {path: 'réservation', component:ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
