import { Badge } from '../badge/badge';

export const USERS: UserLogin[] = [
  {"login":"Zouheir", "password":"banou"}
]

export interface UserLogin{
  login: string,
  password: string,
  imageUrl?: string
}

export interface User extends UserLogin{
  id?:number,
  first_name: string,
  last_name: string,
  email?:string,
  badges: Badge[]
}
