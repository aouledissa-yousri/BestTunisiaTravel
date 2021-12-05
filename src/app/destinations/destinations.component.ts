import { Component, OnInit, OnDestroy } from '@angular/core';
import { DestinationsService } from '../services/destinations/destinations.service';
import { Destination } from '../models/destination';
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';


@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  destinations: Destination[] = []
  found: boolean = true


  constructor(private title: Title, private destinationService: DestinationsService, private router: Router) { }

  ngOnInit(): void {
    //change page title when this component loads
    this.title.setTitle("Destinations - Best Tunisia Travel")

    //get all offers from service
    this.fetchOffers()

    this.changeBg()

  }  

  
  
  ngOnDestroy(): void {
    document.getElementsByTagName("body")[0].classList.remove("repeat")
  }


  private fetchOffers(){
    this.destinationService.linkToDb().subscribe((offers: any) => {
      this.destinations = JSON.parse(JSON.stringify(offers)).offers
    })
  }

  private changeBg(){
    document.getElementsByTagName("body")[0].classList.add("repeat")
  }

  seeMore(id: number){
    this.router.navigate(["Destinations", id])
  }

  search(word: string){
    if(word == ""){
      this.fetchOffers()
    }else{
      this.destinations = this.destinationService.find(word, this.destinations)
      this.found = (this.destinations.length != 0)
      
    }
  }

  
}
