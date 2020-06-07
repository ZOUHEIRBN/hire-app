import { User } from './user'

export const default_resume:Resume = {
  "academic_cursus": [],
  "professionnal_cursus": [],
  "academic_projects": [],
  "languages": [],
  "skills": [],
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
  lang:string
  level:number
  constructor(lang="", level=0){
    this.lang = lang
    this.level = level
  }
}
export class Skill implements Criterion{
  skill:string
  level:number
  constructor(skill="", level=0){
    this.skill = skill
    this.level = level
  }
}
export class Degree implements Criterion{
  option:string
  level:number
  diploma_types: string[]
  constructor(option="", level=0, dip_types=[]){
    this.option = option
    this.level = level
    this.diploma_types = dip_types
  }
}
