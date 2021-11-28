import { Component, OnInit, OnDestroy } from '@angular/core';
import { DestinationsService } from '../services/destinations/destinations.service';
import { Destination } from '../models/destination';
import { Title } from "@angular/platform-browser";


@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  destinations: Destination[] = []
  database: any

  constructor(private title: Title, private destinationService: DestinationsService) { }

  ngOnInit(): void {
    //change page title when this component loads
    this.title.setTitle("Destinations - Best Tunisia Travel")

    //get all offers from service
    this.fetchOffers()

  }  
  
  ngOnDestroy(): void {
  }


  fetchOffers(){
    this.database = this.destinationService.linkToDb()
    this.database.subscribe((offers: any) => {
      this.destinations = JSON.parse(JSON.stringify(offers)).offers
    })
  }
}
