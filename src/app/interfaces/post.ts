import { Badge } from './badge'
import { User } from './user';
import { Company } from './company';
import { Skill, Language } from './resume';

export const def_post:Post = {
  'id':0,
  'title':'',
  'ownerId':0,
  'description': '',
  'badges': [],
  'imageUrl': ''
}

export const posttypes = {
  "types":["Offer", "Demand", "Event"],
  "subjects": {
    "Offer": ["Job", "Internship"],
    "Demand": ["Job", "Internship"],
    "Event": ["Formation", "Webinar"]
  }
}

export class Post{
  id:number;
  type?:string;
  subject?:string;
  ownerId:number|string;
  owner?: User|Company;
  title?: string;
  description: string;
  badges: Badge[];
  imageUrl: string|ArrayBuffer;
}
export class Comment{
  related_post;
  value:string = '';
  timestamp;
  commenting_user;
}
class Job extends Post{
  workdays: any[];
  workhours: number;
  contractType: string;
}
export class JobOffer extends Job {
  salary: number = 0;

  requiredSkills: Skill[] = []
  requiredLanguages: Language[] = []
  businessTravels_national;
  businessTravels_international;

  constructor(){
    super();
    this.requiredSkills = [];
  }
}
export class JobDemand extends Job {
  businessTravels_national;
  businessTravels_international;
  salary_range;
  min_workhours;
  max_workhours
  constructor(){
    super();
    this.min_workhours = 0
    this.max_workhours = 12

  }
}
