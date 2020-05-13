import { Badge } from './badge'
import { User } from './user';
import { Company } from './company';

export const def_post:Post = {
  'id':0,
  'title':'',
  'ownerId':0,
  'description': '',
  'badges': [],
  'imageUrl': ''
}

export interface Post{
  id:number,
  type?:string,
  subject?:string,
  ownerId:number|string,
  owner?: User|Company,
  title?: string,
  description: string,
  badges: Badge[],
  imageUrl: string|ArrayBuffer,
  salary?: number,
  workhours?: number,
  workdays?: any[],
}

export const posttypes = {
  "types":["Offer", "Demand", "Event"],
  "subjects": {
    "Offer": ["Job", "Internship"],
    "Demand": ["Job", "Internship"],
    "Event": ["Formation", "Webinar"]
  }
}
