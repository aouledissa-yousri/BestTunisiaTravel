import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-essential',
  templateUrl: './essential.component.html',
  styleUrls: ['./essential.component.css']
})
export class EssentialComponent implements OnInit {

  essentials = [
    {name: "Health", icon: "fas fa-h-square", route: "health"},
    {name: "Safety", icon: "fas fa-exclamation-triangle", route: "safety"},
    {name: "Currency", icon: "fas fa-dollar-sign", route: "currency"},
    {name: "Travel papers", icon: "fa fa-file", route: "travel_papers"},
    {name: "Emergency numbers", icon: "fa fa-phone", route: "emergency_numbers"},
    {name: "Languages", icon: "fa fa-language", route: "language"}
  ]

  constructor(private router: Router, private title: Title) { }

  scroll(x: number){
    window.scrollTo(0,x)
  }

  redirect(path: string){
    this.router.navigate([path])
  }

  ngOnInit(): void {
    //change page title when this component loads
    this.title.setTitle("Essential information - Best Tunisia Travel")
  }

}
