import { Badge } from './badge';

export interface UserLogin{
  id: string,
  password: string,
  imageUrl?: string
}

export interface User extends UserLogin{
  first_name: string,
  last_name: string,
  email:string,
  badges: Badge[]
}
