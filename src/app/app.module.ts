import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule  } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipeComponent } from './equipe/equipe.component';
import { NavComponent } from './section/nav/nav.component';
import { HeaderTopComponent } from './section/header-top/header-top.component';
import { FooterComponent } from './section/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    NavComponent,
    HeaderTopComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ReservationComponent,
    ReservationDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
