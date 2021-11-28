import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { AboutComponent } from './about/about.component';
import { EssentialComponent } from "./essential/essential.component";
import { HealthComponent } from "./essential/health/health.component";
import { SafetyComponent } from "./essential/safety/safety.component";
import { CurrencyComponent } from "./essential/currency/currency.component";
import { TravelPapersComponent } from "./essential/travel-papers/travel-papers.component";
import { EmergencyNumbersComponent } from "./essential/emergency-numbers/emergency-numbers.component";
import { LanguageComponent } from "./essential/language/language.component";

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Destinations', component: DestinationsComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Essential', component: EssentialComponent,
    children: [
      {path: "health", component: HealthComponent},
      {path: "safety", component: SafetyComponent},
      {path: "currency", component: CurrencyComponent}, 
      {path: "travel_papers", component: TravelPapersComponent},
      {path: "emergency_numbers", component: EmergencyNumbersComponent},
      {path: "language", component: LanguageComponent},
      {path: '', redirectTo: 'health', pathMatch: 'full'}
    ]
  },
  {path: '', redirectTo: 'Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
