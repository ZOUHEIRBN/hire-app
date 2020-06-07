import { Badge } from './badge';
import { Resume } from './resume';

export interface UserLogin{
  email: string,
  password: string,
  imageUrl?: string
}

export class User implements UserLogin{
  id: string;
  password: string;
  imageUrl?: string;
  first_name: string
  last_name: string
  dateOfBirth:Date
  email:string
  badges: Badge[]
  resume:Resume
  following:User[] = []
  followers:User[] = []
}
