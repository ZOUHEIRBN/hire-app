import { Badge } from '../badge/badge';

export const USERS: UserLogin[] = [
  {"login":"Zouheir", "password":"banou"}
]

export interface UserLogin{
  login: string,
  password: string,
}

export interface User extends UserLogin{
  first_name: string,
  last_name: string,
  badges: Badge[]
}
