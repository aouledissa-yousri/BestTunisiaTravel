import { Injectable } from '@angular/core';
import { Destination } from "../../models/destination";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(private firestore: AngularFirestore) { }

  linkToDb(){
    return this.firestore.collection("BestTunisiaTravel").doc("offers").valueChanges()
  }
}

