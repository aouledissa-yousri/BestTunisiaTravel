import { Component, OnInit } from '@angular/core';
import { Warning } from "../../models/warning"

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent implements OnInit {

  warnings: Warning[] = [
    new Warning("fas fa-exclamation-circle","Overall risk","Low","Overall, Tunisia is a safe country, but there are extremely high rates of petty crime. You should be vigilant and take all possible precautions measures in order to minimize the risk of something going wrong."),
    new Warning("fas fa-bus","Transport & Taxis risk", "Medium", "When it comes to transport, it isn't very safe or reliable. You have to be very careful in public transport because there may be thieves lurking around, and sexual harassment toward women is common. Make sure that the taxi drivers aren't ripping you off under the excuse that their meters aren't working."),
    new Warning("fab fa-get-pocket", "Pickpockets risk", "High", "There is an extreme threat to petty crime. Pickpockets are practically an everyday occurrence and you should be extremely careful when handling your valuables and never carry your money in a purse or a pocket. The riskiest locations are crowded places such as markets, public transport and bus, and train stations."),
    new Warning("fas fa-user", "Mugging risk", "Medium", "The chances of getting mugged or kidnapped are high around the border with Libya, and there are areas that are best avoided, such as poorly lit and deserted areas in the big cities."),
    new Warning("fas fa-bell-slash", "Scams risk", "Medium", "Watch out for street vendors trying to rip you off and overcharge for their service, double-check the authenticity of everything you want to buy as well as the change you receive and negotiate everything in advance."),
    new Warning("fas fa-female", "Women travelers risk", "Medium", "Tunisia is not the safest choice for female solo travelers. Sexual assaults do occur occasionally, and women, in general, tend to attract unwanted attention.")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
