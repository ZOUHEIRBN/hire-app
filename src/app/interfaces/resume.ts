import { User } from './user'

export const default_resume:Resume = {
  "academic_cursus": [
    {
      "title": "Master recherche en Data Science",
      "degree": "Master",
      "school": "FSBM",
      "begin_date": new Date("Sep 2018"),
      "end_date": new Date("Sep 2020"),
      "grade": "A. Bien",
    },
    {
      "title": "Licence fondamentale",
      "degree": "Bachelor",
      "school": "FSBM",
      "begin_date": new Date("Sep 2015"),
      "end_date": new Date("Sep 2018"),
      "grade": "Bien",
    }
  ],
  "professionnal_cursus": [
    {
      "title": "Développeur Full-stack",
      "organization": "ABCInfographics",
      "organization_address": "92, ABCInfographics",
      "description": "Lorem ipsum dolor sit amet",
      "sector":"IT",
      "begin_date": new Date("Sep 2015"),
      "end_date": new Date("Sep 2018"),
      "added_values": "Lorem ipsum dolor sit amet",
    },
    {
      "title": "Consultant en Data Science",
      "organization": "GreenLand",
      "organization_address": "92, GreenLand",
      "description": "Lorem ipsum dolor sit amet",
      "sector":"Agriculture",
      "begin_date": new Date("Sep 2020"),
      "end_date": new Date("Sep 2024"),
      "added_values": "Lorem ipsum dolor sit amet",
    }
  ],
  "academic_projects": [
    {
      "title": "Projet en JEE",
      "description": "Lorem ipsum dolor sit amet",
      "actions": "Lorem ipsum dolor sit amet",
      "begin_date": new Date("Sep 2020"),
      "end_date": new Date("Sep 2024"),

    },
    {
      "title": "Projet en .NET",
      "description": "Lorem ipsum dolor sit amet",
      "actions": "Lorem ipsum dolor sit amet",
      "begin_date": new Date("Sep 2020"),
      "end_date": new Date("Sep 2024"),
    }
  ],
  "languages": [
    {
      "lang": "Arabic",
      "level": 10
    },{
      "lang": "French",
      "level": 7
    },{
      "lang": "English",
      "level": 8
    },
  ],
  "skills": [
    {
      "skill": "Java Development",
      "level": 5
    },{
      "skill": "Python Developmnet (Django/Flask)",
      "level": 8
    },{
      "skill": "Python data processing (Pandas)",
      "level": 6
    },
  ],
}

export class Resume{
  academic_cursus:AcademicDiploma[]
  professionnal_cursus:ProfessionnalExperience[]
  academic_projects:AcademicProject[]
  languages:Language[]
  skills:Skill[]
}
export interface Criterion{
  // toVector():number[]
  // compare(criterion: Criterion):number
}
export class AcademicDiploma implements Criterion{
  title:string = "Master recherche en Data Science"
  degree:string =  "Master"
  school:string =  "FSBM"
  begin_date:Date =  new Date()
  end_date?:Date =  new Date()
  grade?:string =  "A. Bien"

}
export class ProfessionnalExperience implements Criterion{
  title:string = "Développeur Full-stack"
  organization:string =  "ABCInfographics"
  organization_address:string = "92, ABCInfographics"
  description:string =  "Lorem ipsum dolor sit amet"
  sector:string = "IT"
  begin_date:Date =  new Date()
  end_date?:Date =  new Date()
  added_values:string =  "Lorem ipsum dolor sit amet"
}
export class AcademicProject implements Criterion{
  title:string = "Projet en JEE"
  description:string =  "Lorem ipsum dolor sit amet"
  begin_date:Date =  new Date()
  end_date?:Date =  new Date()
  actions:string =  "Lorem ipsum dolor sit amet"
}
export class Language implements Criterion{
  lang:string = "Arabic"
  level:number = 0
}
export class Skill implements Criterion{
  skill:string = "Python"
  level:number = 0
}
