import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Destination } from '../models/destination';
import { DestinationsService } from '../services/destinations/destinations.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  id: number = 0
  destination: Destination = new Destination(0,"","",0,false,false,[],[],"",0)
  form: FormGroup = new FormGroup({})

  constructor(private router: Router, private activated: ActivatedRoute, private destinationsService: DestinationsService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params["id"]
    
    this.fetchOffer()
    this.initComments()
  }

  back(){
    this.router.navigate(["Destinations", this.id])
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

  private initComments(){
    this.form = this.builder.group({
      user: ["", Validators.required],
      comment: ["", Validators.required]
    })
  }

  submit(){
    let comment = {
      user: this.form.value["user"],
      comment: this.form.value["comment"]
    }

    this.destinationsService.addComment(comment, this.destination)

    this.form.reset()
  }

  apply(){
    this.router.navigate(["Destinations", this.id, "Apply"])
  }

}
