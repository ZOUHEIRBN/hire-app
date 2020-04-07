import { Badge } from '../badge/badge'
export interface Post{
  id:number,
  type?:string,
  ownerId:number|string,
  title: string,
  description: string,
  badges: Badge[],
  imageUrl: string
}
export interface Offer extends Post{
  salary: number,
  workhours: number,
  workdays: number,
}
