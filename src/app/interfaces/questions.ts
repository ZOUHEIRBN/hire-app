import { User } from './user'

export class Answer{
  text:string
  correct:boolean
  constructor(text, is_correct){
    this.text = text
    this.correct = is_correct
  }
}
export class Question{
  id?:string
  text:string
  answers: Answer[]
  level:number
  related_fields:string[]
  asker?:User
  constructor(text="", level=1, related_field=""){
    this.text = text
    this.level = level
    if(related_field === ""){
      this.related_fields = []
    }
    else{
      this.related_fields = [related_field]
    }
    this.answers = []

    this.asker = new User()
  }
  public add_answer(text, is_correct){
    let ans = new Answer(text, is_correct)
    this.answers.push(ans)
  }
  evaluate(answer){
    for(let a of this.answers){
      if(a.text === answer && a.correct){
        return this.level
      }
    }
    return 0
  }
}
