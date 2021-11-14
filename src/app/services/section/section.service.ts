import { Injectable } from '@angular/core';
import { Section } from "../../models/section"

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  sections: Section[] = [
    new Section("Nature and Outdoor Activities","assets/sections/nature.png"),
    new Section("Culture","assets/sections/culture.png"),
    new Section("Gastronomy","assets/sections/gastronomy.png"),
    new Section("Beaches","assets/sections/beaches.png")
  ]

  constructor() { }

  getSections(){
    return this.sections
  }
}
