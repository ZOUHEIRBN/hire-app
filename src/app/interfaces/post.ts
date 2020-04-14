import { Badge } from './badge'
import { User } from './user';
import { Company } from './company';

export const def_post:Post = {
  'id':0,
  'title':'',
  'type':'post',
  'ownerId':0,
  'description': '',
  'badges': [],
  'imageUrl': ''
}

export interface Post{
  id:number,
  type?:string,
  ownerId:number|string,
  owner?: User|Company,
  title?: string,
  description: string,
  badges: Badge[],
  imageUrl: string |ArrayBuffer
}
export interface Offer extends Post{
  salary: number,
  workhours: number,
  workdays: number,
}
