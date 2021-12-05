import { Injectable } from '@angular/core';
import { Nationality } from "../../models/nationality"

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  constructor() { }

  getCountries(){
    let result: Nationality[] = []
    for(let i=0; i<174; i++){
      result.push(new Nationality(
        this.getCountry(i).code, 
        this.getCountry(i).nationality, 
      ))
    }
    return result
  }

  private getCountry(id: number): any{
    switch(id){
      
      case  0 : 
          return {code: "AD" , nationality: "Andorran"}
        
      case  1 : 
          return {code: "AE" , nationality: "Emirati"}
              
      case  2 : 
          return {code: "AF" , nationality: "Afghan"}
              
      case  3 : 
          return {code: "AG" , nationality: "Antiguan and barabudan"}
              
      case  4 : 
          return {code: "AI" , nationality: "Anguillan"}
              
      case  5 : 
          return {code: "AL" , nationality: "Albanian"}
              
      case  6 : 
          return {code: "AM" , nationality: "Armenia"}
              
      case  7 : 
          return {code: "AN" , nationality: "Carribean dutch"}
              
      case  8 : 
          return {code: "AO" , nationality: "Angolan"}
              
      case  9 : 
          return {code: "AR" , nationality: "Argentinian"}
              
      case  10 : 
          return {code: "AS" , nationality: "American samoan"}
              
      case  11 : 
          return {code: "AT" , nationality: "Austrian"}
              
      case  12 : 
          return {code: "AU" , nationality: "Australian"}
              
      case  13 : 
          return {code: "AW" , nationality: "Aruban"}
              
      case  14 : 
          return {code: "AX" , nationality: "Alandian"}
              
      case  15 : 
          return {code: "AZ" , nationality: "Azerbaijani"}
              
      case  16 : 
          return {code: "BA" , nationality: "Bosnian"}
              
      case  17 : 
          return {code: "BB" , nationality: "Barbadan"}
              
      case  18 : 
          return {code: "BD" , nationality: "Bengali"}
              
      case  19 : 
          return {code: "BE" , nationality: "Belgian"}
              
      case  20 : 
          return {code: "BF" , nationality: "Burkinabe"}
              
      case  21 : 
          return {code: "BG" , nationality: "Bulgarian"}
              
      case  22 : 
          return {code: "BH" , nationality: "Bahraini"}
              
      case  23 : 
          return {code: "BI" , nationality: "Burundian"}
              
      case  24 : 
          return {code: "BJ" , nationality: "Beninese"}
              
      case  25 : 
          return {code: "BM" , nationality: "Bermudan"}
              
      case  26 : 
          return {code: "BN" , nationality: "Bruneian"}
              
      case  27 : 
          return {code: "BO" , nationality: "Bolivian"}
              
      case  28 : 
          return {code: "BR" , nationality: "Brazillian"}
              
      case  29 : 
          return {code: "BS" , nationality: "Bahaman"}
              
      case  30 : 
          return {code: "BT" , nationality: "Bhutanese"}
              
      case  31 : 
          return {code: "BW" , nationality: "Botswanan"}
              
      case  32 : 
          return {code: "BY" , nationality: "Belarusian"}
              
      case  33 : 
          return {code: "BZ" , nationality: "Belizian"}
              
      case  34 : 
          return {code: "CA" , nationality: "Canadian"}
              
      case  35 : 
          return {code: "CD" , nationality: "DC Congolian"}
              
      case  36 : 
          return {code: "CF" , nationality: "Central african"}
              
      case  37 : 
          return {code: "CG" , nationality: "Congolian"}
              
      case  38 : 
          return {code: "CH" , nationality: "Swiss"}
              
      case  39 : 
          return {code: "CI" , nationality: "Ivoirian"}
              
      case  40 : 
          return {code: "CL" , nationality: "Chilean"}
              
      case  41 : 
          return {code: "CM" , nationality: "Cameroonian"}
              
      case  42 : 
          return {code: "CN" , nationality: "Chinese"}
              
      case  43 : 
          return {code: "CO" , nationality: "Colombian"}
              
      case  44 : 
          return {code: "CR" , nationality: "Costa rican"}
              
      case  45 : 
          return {code: "CU" , nationality: "Cuban"}
              
      case  46 : 
          return {code: "CV" , nationality: "Cape verdean"}
              
      case  47 : 
          return {code: "DE" , nationality: "German"}
              
      case  48 : 
          return {code: "DJ" , nationality: "Djiboutians"}
              
      case  49 : 
          return {code: "DK" , nationality: "Danish"}
              
      case  50 : 
          return {code: "DM" , nationality: "Dominican"}
              
      case  51 : 
          return {code: "DO" , nationality: "Dominican R"}
              
      case  52 : 
          return {code: "DZ" , nationality: "Algeria"}
              
      case  53 : 
          return {code: "EC" , nationality: "Ecuador"}
              
      case  54 : 
          return {code: "EE" , nationality: "Estonian"}
              
      case  55 : 
          return {code: "EG" , nationality: "Egyptian"}
              
      case  56 : 
          return {code: "ER" , nationality: "Eritrean"}
              
      case  57 : 
          return {code: "ES" , nationality: "Spanish"}
              
      case  58 : 
          return {code: "ET" , nationality: "Ethiopian"}
              
      case  59 : 
          return {code: "FI" , nationality: "Finnish"}
              
      case  60 : 
          return {code: "FJ" , nationality: "Fijin"}
              
      case  61 : 
          return {code: "FO" , nationality: "Faroean"}
              
      case  62 : 
          return {code: "FR" , nationality: "French"}
              
      case  63 : 
          return {code: "GA" , nationality: "Gabonese"}
              
      case  64 : 
          return {code: "GE" , nationality: "Georgian"}
              
      case  65 : 
          return {code: "GH" , nationality: "Ghanaian"}
              
      case  66 : 
          return {code: "GM" , nationality: "Gambian"}
              
      case  67 : 
          return {code: "GN" , nationality: "Guinean"}
              
      case  68 : 
          return {code: "GQ" , nationality: "Equatorial guinean"}
              
      case  69 : 
          return {code: "GR" , nationality: "Greek"}
              
      case  70 : 
          return {code: "GT" , nationality: "Guatemalian"}
              
      case  71 : 
          return {code: "GU" , nationality: "Guam"}
              
      case  72 : 
          return {code: "GW" , nationality: "Guinean bisseau"}
              
      case  73 : 
          return {code: "GY" , nationality: "Guyanan"}
              
      case  74 : 
          return {code: "HN" , nationality: "HonduraN"}
              
      case  75 : 
          return {code: "HR" , nationality: "Croatia"}
              
      case  76 : 
          return {code: "HT" , nationality: "Haitian"}
              
      case  77 : 
          return {code: "HU" , nationality: "Hungarian"}
              
      case  78 : 
          return {code: "ID" , nationality: "Indonesian"}
              
      case  79 : 
          return {code: "IE" , nationality: "Irish"}
              
      case  80 : 
          return {code: "IN" , nationality: "Indian"}
              
      case  81 : 
          return {code: "IQ" , nationality: "Iraqi"}
              
      case  82 : 
          return {code: "IR" , nationality: "Iranian"}
              
      case  83 : 
          return {code: "IS" , nationality: "Icelander"}
              
      case  84 : 
          return {code: "IT" , nationality: "Italian"}
              
      case  85 : 
          return {code: "JM" , nationality: "Jamaica"}
              
      case  86 : 
          return {code: "JO" , nationality: "Jordanian"}
              
      case  87 : 
          return {code: "JP" , nationality: "Japanese"}
              
      case  88 : 
          return {code: "KE" , nationality: "Kenyan"}
              
      case  89 : 
          return {code: "KG" , nationality: "Kyrgyzstani"}
              
      case  90 : 
          return {code: "KH" , nationality: "Cambodian"}
              
      case  91 : 
          return {code: "KM" , nationality: "Comorian"}
              
      case  92 : 
          return {code: "KP" , nationality: "North korean"}
              
      case  93 : 
          return {code: "KR" , nationality: "South korean"}
              
      case  94 : 
          return {code: "KW" , nationality: "Kuwaiti"}
              
      case  95 : 
          return {code: "KZ" , nationality: "Kazakhstani"}
              
      case  96 : 
          return {code: "LB" , nationality: "Lebanese"}
              
      case  97 : 
          return {code: "LK" , nationality: "Sri lankan"}
              
      case  98 : 
          return {code: "LR" , nationality: "Liberian"}
              
      case  99 : 
          return {code: "LT" , nationality: "Lithuanian"}
              
      case  100 : 
          return {code: "LU" , nationality: "Luxembourg"}
              
      case  101 : 
          return {code: "LY" , nationality: "Libyan"}
              
      case  102 : 
          return {code: "MA" , nationality: "Morrocan"}
              
      case  103 : 
          return {code: "MD" , nationality: "Moldovan"}
              
      case  104 : 
          return {code: "ME" , nationality: "Montenegrin"}
              
      case  105 : 
          return {code: "MG" , nationality: "Malagasy"}
              
      case  106 : 
          return {code: "MK" , nationality: "Macedonian"}
              
      case  107 : 
          return {code: "ML" , nationality: "Malian"}
              
      case  108 : 
          return {code: "MM" , nationality: "Myanmarian"}
              
      case  109 : 
          return {code: "MN" , nationality: "Mongolian"}
              
      case  110 : 
          return {code: "MR" , nationality: "Mauritania"}
              
      case  111 : 
          return {code: "MT" , nationality: "Maltan"}
              
      case  112 : 
          return {code: "MV" , nationality: "Maldivian"}
              
      case  113 : 
          return {code: "MW" , nationality: "Malawian"}
              
      case  114 : 
          return {code: "MX" , nationality: "Mexican"}
              
      case  115 : 
          return {code: "MY" , nationality: "Malysian"}
              
      case  116 : 
          return {code: "MZ" , nationality: "Mozambican"}
              
      case  117 : 
          return {code: "NA" , nationality: "Namibian"}
              
      case  118 : 
          return {code: "NE" , nationality: "Nigerien"}
              
      case  119 : 
          return {code: "NG" , nationality: "Nigerian"}
              
      case  120 : 
          return {code: "NI" , nationality: "Nicaraguan"}
              
      case  121 : 
          return {code: "NL" , nationality: "Dutch"}
              
      case  122 : 
          return {code: "NO" , nationality: "Norwegian"}
              
      case  123 : 
          return {code: "NP" , nationality: "Nepalis"}
              
      case  124 : 
          return {code: "NZ" , nationality: "New zealand"}
              
      case  125 : 
          return {code: "OM" , nationality: "Omani"}
              
      case  126 : 
          return {code: "PA" , nationality: "Panamian"}
              
      case  127 : 
          return {code: "PE" , nationality: "Peruvian"}
              
      case  128 : 
          return {code: "PH" , nationality: "Filippinos"}
              
      case  129 : 
          return {code: "PK" , nationality: "Pakistani"}
              
      case  130 : 
          return {code: "PL" , nationality: "Polish"}
              
      case  131 : 
          return {code: "PR" , nationality: "Puerto rican"}
              
      case  132 : 
          return {code: "PS" , nationality: "Palestinian"}
              
      case  133 : 
          return {code: "PT" , nationality: "Portuguese"}
              
      case  134 : 
          return {code: "PY" , nationality: "Parguayan"}
              
      case  135 : 
          return {code: "QA" , nationality: "Qatari"}
              
      case  136 : 
          return {code: "RO" , nationality: "Romania"}
              
      case  137 : 
          return {code: "RS" , nationality: "Serbian"}
              
      case  138 : 
          return {code: "RU" , nationality: "Russian"}
              
      case  139 : 
          return {code: "RW" , nationality: "Rwandan"}
              
      case  140 : 
          return {code: "SA" , nationality: "Saudi"}
              
      case  141 : 
          return {code: "SD" , nationality: "Sudani"}
              
      case  142 : 
          return {code: "SE" , nationality: "Swedish"}
              
      case  143 : 
          return {code: "SG" , nationality: "Singaporean"}
              
      case  144 : 
          return {code: "SI" , nationality: "Slovenian"}
              
      case  145 : 
          return {code: "SK" , nationality: "Slovakian"}
              
      case  146 : 
          return {code: "SL" , nationality: "Sierra leone"}
              
      case  147 : 
          return {code: "SM" , nationality: "San marino"}
              
      case  148 : 
          return {code: "SN" , nationality: "Senegalese"}
              
      case  149 : 
          return {code: "SO" , nationality: "Somali"}
              
      case  150 : 
          return {code: "SS" , nationality: "South sudani"}
              
      case  151 : 
          return {code: "SV" , nationality: "Selvadoran"}
              
      case  152 : 
          return {code: "SY" , nationality: "Syrian"}
              
      case  153 : 
          return {code: "TD" , nationality: "Chadi"}
              
      case  154 : 
          return {code: "TG" , nationality: "Togolese"}
              
      case  155 : 
          return {code: "TH" , nationality: "Thalandi"}
              
      case  156 : 
          return {code: "TJ" , nationality: "Tajikstani"}
              
      case  157 : 
          return {code: "TM" , nationality: "Turkmanistani"}
              
      case  158 : 
          return {code: "TR" , nationality: "Turkish"}
              
      case  159 : 
          return {code: "TT" , nationality: "Trindadian"}
              
      case  160 : 
          return {code: "TW" , nationality: "Taiwani"}
              
      case  161 : 
          return {code: "TZ" , nationality: "Tanzani"}
              
      case  162 : 
          return {code: "UA" , nationality: "Ukranian"}
              
      case  163 : 
          return {code: "UG" , nationality: "Ugandan"}
              
      case  164 : 
          return {code: "US" , nationality: "American"}
              
      case  165 : 
          return {code: "UY" , nationality: "Uruguayan"}
              
      case  166 : 
          return {code: "UZ" , nationality: "Uzbekistani"}
              
      case  167 : 
          return {code: "VE" , nationality: "Venezuelan"}
              
      case  168 : 
          return {code: "VN" , nationality: "Vietnamese"}
              
      case  169 : 
          return {code: "WS" , nationality: "Samoan"}
              
      case  170 : 
          return {code: "YE" , nationality: "Yemeni"}
              
      case  171 : 
          return {code: "ZA" , nationality: "South african"}
              
      case  172 : 
          return {code: "ZM" , nationality: "Zambian"}
              
      case  173 : 
          return {code: "ZW" , nationality: "Zimbabwean"}              
    }
  }
}
