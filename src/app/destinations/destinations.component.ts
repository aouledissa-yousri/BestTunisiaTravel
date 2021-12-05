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

    //get all offers from database
    this.fetchOffers()

    this.changeBg()

  }  

  
  
  ngOnDestroy(): void {
    document.getElementsByTagName("body")[0].classList.remove("repeat")
  }


  private fetchOffers(){
    this.destinationService.linkToDb().subscribe((offers: any) => {
      this.destinations = JSON.parse(JSON.stringify(offers)).offers
      this.filter()
    })
  }

  private getAllOffers(){
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

  checkCategory(category: string){
    return this.destinationService.categories.includes(category)
  }

  modCategory(e: any){
    if(e.target.checked){
      this.destinationService.categories.push(e.target.value)
      return
    }
    for(let i=0; i<this.destinationService.categories.length; i++){
      if(e.target.value == this.destinationService.categories[i]){
        this.destinationService.categories.splice(i,1)
        return
      }
    }
  }

  filter(){
    if(this.destinationService.categories.length > 0){
      let result: Destination[] = []
      for(let i=0; i<this.destinations.length; i++){
        if(this.destinations[i].category.length < this.destinationService.categories.length){
          continue 
        }
        let counter = 0
        for(let j=0; j<this.destinations[i].category.length; j++){
          if(this.destinationService.categories.indexOf(this.destinations[i].category[j]) != -1)
            counter++
        }
        if(counter == this.destinationService.categories.length)
          result.push(this.destinations[i])
      }
      this.destinations = result
    }else{
      this.getAllOffers()
    }
  }

  

  
}
