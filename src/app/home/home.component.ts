import { Component, OnInit, HostListener } from '@angular/core';
import { SectionService } from "../services/section/section.service";
import { Section } from "../models/section";
import { Router } from '@angular/router';
import { Title } from "@angular/platform-browser";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sections : Section[] = []


  constructor(private section: SectionService, private router: Router, private title: Title) { }

  private isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  scroll(x: number){
    window.scrollTo(0,x);
  }

  ngOnInit(): void {
    this.sections = this.section.getSections()
    window.scrollTo(0,0);
    this.title.setTitle("Best Tunisia Travel")
  }

  @HostListener("window:scroll")
  playAnimation(){
    if(this.isInViewport(document.getElementsByClassName("content")[0])){
      document.getElementsByClassName("content")[0].classList.add("playContentAnimation")
    }

    if(this.isInViewport(document.getElementsByClassName("sections")[0])){
      document.getElementsByClassName("sections")[0].classList.add("playContentAnimation")
    }

    if(this.isInViewport(document.getElementsByClassName("essential")[0])){
      document.getElementsByClassName("essential")[0].classList.add("playContentAnimation")
    }
  }

  redirect(path: string){
    this.router.navigate([path])
  }

}
