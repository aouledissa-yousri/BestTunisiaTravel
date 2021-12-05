import { Injectable } from '@angular/core';
import { Destination } from "../../models/destination";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import * as firestore from "@firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  categories: string[] = []

  constructor(private firestore: AngularFirestore) { }

  linkToDb(){
    return this.firestore.collection("BestTunisiaTravel").doc("offers").valueChanges()
  }

  find(word: string, destinations: Destination[]){
    let result: Destination[] = []
    for(let i=0; i<destinations.length; i++){
      if(destinations[i].name.indexOf(word) != -1)
        result.push(destinations[i])     
    }
    return result
  }

  addComment(comment: any, destination: Destination){
    this.firestore.collection("BestTunisiaTravel").doc("offers").update({
      offers: firestore.arrayRemove(destination)
    })

    destination.comments.push(comment)

    this.firestore.collection("BestTunisiaTravel").doc("offers").update({
      offers: firestore.arrayUnion(destination)
    })
  }

  addReservation(reservation: any, destination: Destination){
    this.firestore.collection("BestTunisiaTravel").doc("reservations").update({
      reservations: firestore.arrayUnion(reservation)
    })

    this.firestore.collection("BestTunisiaTravel").doc("offers").update({
      offers: firestore.arrayRemove(destination)
    })

    destination.reservations++

    this.firestore.collection("BestTunisiaTravel").doc("offers").update({
      offers: firestore.arrayUnion(destination)
    })
  }
}

