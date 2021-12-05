import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../services/destinations/destinations.service';
import { Destination } from '../models/destination';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  id: number =0
  destination: Destination = new Destination(0,"","",0,false,false,[],[],"",0)

  constructor(private destinationsService: DestinationsService, private activated: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params["id"]
    this.fetchOffer()
  }

  private fetchOffer(){
    this.destinationsService.linkToDb().subscribe((obj: any) => {
      let destinations: Destination[] = JSON.parse(JSON.stringify(obj)).offers
      for(let i=0; i<destinations.length; i++){
        if(this.id == destinations[i].id){
          this.destination = destinations[i]
          break
        }
      }
    })
  }

  back(){
    this.router.navigate(["Destinations"])
  }

  checkComments(){
    this.router.navigate(["Destinations", this.id, "Comments"])
  }

  apply(){
    this.router.navigate(["Destinations", this.id, "Apply"])
  }
}
