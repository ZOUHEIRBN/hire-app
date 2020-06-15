import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { FormControl } from '@angular/forms';
import { Resume, default_resume, ProfessionnalExperience, AcademicDiploma, AcademicProject, Skill, Language } from 'src/app/interfaces/resume';
import { ResumeService } from 'src/app/services/resume.service';
import { MatDialog } from '@angular/material/dialog';
import { QuizzPanelComponent } from 'src/app/panels/quizz-panel/quizz-panel.component';
import { SECTORS, FUNCTIONS, DIPLOMA_TYPES } from 'src/app/interfaces/post';

@Component({
  selector: 'user-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  @Input() editMode = false;
  date = new FormControl(new Date());
  @Input() user:User;
  resume:Resume = default_resume;

  sectors = SECTORS;
  functions = FUNCTIONS
  diploma_types = DIPLOMA_TYPES

  constructor(private _dialog:MatDialog, private _resumeService:ResumeService) { }

  ngOnInit(): void {
    this._resumeService.getResume(this.user.id).subscribe(response => {
      this.resume =  response
    })
  }
  edit(){
    this.editMode = true
  }
  save(){
    console.log(this.resume)
    this._resumeService.putResume(this.user.id, this.resume).subscribe(_ => {
      this.editMode = false
    })
  }
  reset(){
    this._resumeService.resetResume(this.user.id).subscribe(res => {
      this.editMode = false
      console.log(res)
    })
  }
  getPDFResume(){
    console.log(this.resume)
  }

  //Academic cursus
  addAcademicCursus(){
    let pro = new AcademicDiploma()
    this.resume.academic_cursus.push(pro)
  }
  removeAcademicCursus(ac){
    const index = this.resume.academic_cursus.indexOf(ac, 0);
    if (index > -1) {
      this.resume.academic_cursus.splice(index, 1);
    }
  }
  //Professionnal cursus
  addProCursus(){
    let pro = new ProfessionnalExperience()
    this.resume.professionnal_cursus.push(pro)
  }
  removeProCursus(pro){
    const index = this.resume.professionnal_cursus.indexOf(pro, 0);
    if (index > -1) {
      this.resume.professionnal_cursus.splice(index, 1);
    }
  }
  //Academic project
  addAcademicProject(){
    let prj = new AcademicProject()
    this.resume.academic_projects.push(prj)
  }
  removeAcademicProject(prj){
    const index = this.resume.academic_projects.indexOf(prj, 0);
    if (index > -1) {
      this.resume.academic_projects.splice(index, 1);
    }
  }

  //Skills
  addSkill(){
    let s = new Skill()
    this.resume.skills.push(s)
  }
  removeSkill(s){
    const index = this.resume.skills.indexOf(s, 0);
    if (index > -1) {
      this.resume.skills.splice(index, 1);
    }
  }
  takeTest(skill:Skill){
    let dialog = this._dialog.open(QuizzPanelComponent, {
      data: {
        skill: skill
      }
    })
    dialog.componentInstance.doneEvent.subscribe(res => {
      console.log(res)
      skill.level = res
      dialog.close()
    })
  }

  //Languages
  addLanguage(){
    let lang = new Language()
    this.resume.languages.push(lang)
  }
  removeLanguage(lang){
    const index = this.resume.languages.indexOf(lang, 0);
    if (index > -1) {
      this.resume.languages.splice(index, 1);
    }
  }



}
