import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipeComponent } from './equipe/equipe.component';
import { NavComponent } from './section/nav/nav.component';
import { HeaderTopComponent } from './section/header-top/header-top.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    NavComponent,
    HeaderTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
