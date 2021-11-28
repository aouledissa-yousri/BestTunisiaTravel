import { Component, OnInit, HostListener, Host } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  position = 0

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.position = window.scrollX
  }

  navigate(path: string){
    this.router.navigate([path])
  }

  @HostListener("window:scroll")
  scroll(){
    if(window.scrollY >= 50){
      document.getElementsByClassName("contain")[0].classList.add("activated")
    }else{
      document.getElementsByClassName("contain")[0].classList.remove("activated")
    }
  }


}
