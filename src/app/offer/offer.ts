import { Badge } from '../badge/badge'
export interface Offer{
  id:number,
  title: string,
  salary: number,
  workhours: number,
  workdays: number,
  description: string,
  badges: Badge[],
  imageUrl: string
}
