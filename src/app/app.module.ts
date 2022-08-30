import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule  } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipeComponent } from './equipe/equipe.component';
import { NavComponent } from './section/nav/nav.component';
import { HeaderTopComponent } from './section/header-top/header-top.component';
import { FooterComponent } from './section/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    NavComponent,
    HeaderTopComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
