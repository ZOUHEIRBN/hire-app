import { Badge } from '../badge/badge';

export const USERS: UserLogin[] = [
  {"id":"Zouheir", "password":"banou"}
]

export interface UserLogin{
  id: string,
  password: string,
  imageUrl?: string
}

export interface User extends UserLogin{
  first_name: string,
  last_name: string,
  email?:string,
  badges: Badge[]
}
