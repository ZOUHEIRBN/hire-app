import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'user-registration-panel',
  templateUrl: './user-registration-panel.component.html',
  styleUrls: ['./user-registration-panel.component.css']
})
export class UserRegistrationPanelComponent implements OnInit {
  @Input() user:User = new User();
  @Output() doneEvent = new EventEmitter()
  floatlabelControl = new FormControl('auto')

  user_editor:FormGroup;
  passVisibility = false
  matcher = new MyErrorStateMatcher();


  constructor(@Inject(MAT_DIALOG_DATA) public data,
              private formBuilder: FormBuilder
            ) {
    this.user = new User()
    if(data){
      if(data.user){
        this.user = <User>data.user
      }
    }


    this.user_editor = this.formBuilder.group({
      first_name:['', [Validators.required, Validators.minLength(3)]],
      last_name:['', [Validators.required, Validators.minLength(3)]],
      dateOfBirth:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    })

  }

  ngOnInit(): void {

  }

  fileSelect(event){
    const reader = new FileReader();
    reader.onload = e => this.user['imageUrl'] = reader.result.toString();
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.user['imageUrl'])

  }



}
