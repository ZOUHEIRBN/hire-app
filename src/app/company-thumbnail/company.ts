import { Badge } from '../badge/badge';


export interface Company {
  id?:number,
  first_name: string,
  last_name: string,
  email?:string,
  imageUrl?:string,
  address?:{latitude:number, longitude:number},
  badges: Badge[]
}
