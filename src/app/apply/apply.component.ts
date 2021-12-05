import { Component, OnInit } from '@angular/core';
import { Nationality } from '../models/nationality';
import { CountriesService } from "../services/countries/countries.service";
import { FormGroup, FormBuilder, FormArray, Validators, FormControl} from "@angular/forms";
import { Router, ActivatedRoute,  } from "@angular/router";
import { DestinationsService } from '../services/destinations/destinations.service';
import { Destination } from '../models/destination';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  link: string = "http://countryflagicons.com/SHINY/64/AD.png"
  nationalities: Nationality[] = []
  id: number = 0

  form: FormGroup = new FormGroup({})

  partnerInfo = false
  destination: Destination = new Destination(0,"","",0,false,false,[],[],"",0);

  constructor(
    private CountryService: CountriesService, 
    private activated: ActivatedRoute, 
    private build: FormBuilder, 
    private router: Router,
    private destinationsService: DestinationsService
  ) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params["id"]
    this.nationalities = this.CountryService.getCountries()
    this.initForm()
    this.fetchOffer()
    document.getElementsByTagName("body")[0].classList.add("repeat")
  }

  ngOnDestroy(): void{
    document.getElementsByTagName("body")[0].classList.remove("repeat")
  }

  getFlag(e: any){
    for(let i=0; i<this.nationalities.length; i++){
      if(e.target.value == this.nationalities[i].name){
        this.link = "http://countryflagicons.com/SHINY/64/"+this.nationalities[i].code+".png"
        break
      }
    }
  }

  showPartnerInfo(e: any){
    this.partnerInfo = e.target.checked
  }


  private initForm(){
    this.form = this.build.group({
      firstName: ["", [Validators.pattern("[A-Z][^A-Z0-9]+"), Validators.required]],
      lastName: ["", [Validators.pattern("[A-Z][^A-Z0-9]+"), Validators.required]],
      Age: [0, [Validators.required, Validators.min(18)]],
      birth: ["", Validators.required],
      passportNum: [0, [Validators.minLength(8), Validators.required]],
      email: ["", Validators.required],
      gender: ["", Validators.required],
      nationality: ["Andorran", Validators.required],
      partnerName: [""],
      partnerPassportNum: [0],
      children: this.build.array([])
    })
  }

  public get children(){
    return this.form.get("children") as FormArray
  }

  addChild(){
    this.children.push(this.build.control(""))
  }

  back(){
    this.router.navigate(["Destinations", this.id])
  }


  apply(){
    let reservation = {
      firstName: this.form.value["firstName"],
      lastName: this.form.value["lastName"],
      Age: this.form.value["Age"],
      birth: this.form.value["birth"],
      passportNum: this.form.value["passportNum"],
      email: this.form.value["email"],
      gender: this.form.value["gender"],
      nationality: this.form.value["nationality"],
      partnerName: this.form.value["partnerName"],
      partnerPassportNum: this.form.value["partnerPassportNum"],
      children: this.children.value,
      offerId: this.destination.id
    }

    if(reservation.partnerName == "" || reservation.partnerPassportNum == 0){
      delete reservation.partnerName
      delete reservation.partnerPassportNum
    }if(this.children.value == ""){
      delete reservation.children
    }

    this.destinationsService.addReservation(reservation, this.destination)
    this.router.navigate(["Thanks"])
  }

  reset(){
    this.form.reset({nationality: "Andorran"})
    this.children.clear()
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

  typing(e: any){
    if(e.key == "." || e.key == "+" || e.key == "-"){
      e.preventDefault()
    }
  }




  //form error detectors 
  isEmpty(property: string){
    return (this.form.controls[property].value == "" ) && this.form.controls[property].touched
  }

  isValidPattern(property: string){
    return this.form.controls[property].touched && this.form.get(property)?.errors?.pattern
  }

  minAge(){
    return this.form.controls["Age"].touched && (this.form.controls["Age"].value < 18)
  }

  passportValid(){
    return this.form.controls["passportNum"].value < 10000000 && this.form.controls["passportNum"].touched
  }











}
