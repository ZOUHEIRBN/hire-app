import { Badge } from './badge';


export interface Company {
  id?:number,
  title:string,
  email?:string,
  ownerId: string,
  imageUrl?:string,
  address?:{latitude:number, longitude:number},
  badges: Badge[]
}
