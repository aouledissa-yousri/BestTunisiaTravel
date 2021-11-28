import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private title: Title, private router: Router) { }

  ngOnInit(): void {
    //change page title when this component loads
    this.title.setTitle("About us - Best Tunisia Travel")
  }

  scroll(x: number){
    window.scrollTo(0,x);
  }

  redirect(path: string){
    this.router.navigate([path])
  }

}
