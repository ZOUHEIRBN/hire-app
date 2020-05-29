import { Badge } from './badge';


export class Company {
  id?:number
  title:string
  description:string
  ownerId: string
  imageUrl?:string
  badges: Badge[]

  email:string
  tel_number:string
  address?:{latitude:number, longitude:number}
  address_string?:string
  city: string

  sector:string;
  workforce:number;
  turnover?:number;

  technologies:string[]


  constructor(){
    this.badges = []
    this.title = ""
    this.city = ""
    this.description = ""
    this.email = ""
    this.tel_number = ""

  }
}
