import { Component, OnInit, HostListener, Host } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  position = 0

  constructor() { }

  ngOnInit(): void {
    this.position = window.scrollX
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
