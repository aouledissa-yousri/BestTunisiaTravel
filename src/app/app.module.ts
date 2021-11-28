import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { AboutComponent } from './about/about.component';
import { EssentialComponent } from './essential/essential.component';
import { HealthComponent } from './essential/health/health.component';
import { SafetyComponent } from './essential/safety/safety.component';
import { CurrencyComponent } from './essential/currency/currency.component';
import { TravelPapersComponent } from './essential/travel-papers/travel-papers.component';
import { EmergencyNumbersComponent } from './essential/emergency-numbers/emergency-numbers.component';
import { LanguageComponent } from './essential/language/language.component';
import { DestinationComponent } from './destination/destination.component';

const config = {
  apiKey: "AIzaSyAyqrFjLwLBi3q9Z_2WJjQGx_sruc9v1mA",
  authDomain: "besttunisiatravel.firebaseapp.com",
  databaseURL: "https://besttunisiatravel-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "besttunisiatravel",
  storageBucket: "besttunisiatravel.appspot.com",
  messagingSenderId: "1067436259004",
  appId: "1:1067436259004:web:1b350e98004fe1a8b342b9",
  measurementId: "G-8JPF54LWL4"
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DestinationsComponent,
    AboutComponent,
    EssentialComponent,
    HealthComponent,
    SafetyComponent,
    CurrencyComponent,
    TravelPapersComponent,
    EmergencyNumbersComponent,
    LanguageComponent,
    DestinationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
