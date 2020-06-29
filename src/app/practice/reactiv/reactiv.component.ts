import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactiv',
  templateUrl: './reactiv.component.html',
  styleUrls: ['./reactiv.component.scss']
})
export class ReactivComponent implements OnInit {
  learningOptions = ['Basic', 'Advanced', 'Pro']
  defaultLearningOption = 'Advanced';
  isSubmitted = false;
  userData : Object = {};
  signupForm : FormGroup;
  registeredEmail = ['abc@abc.abc', 'def@def.def'];
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'email' : new FormControl('initial Value',[Validators.required, Validators.email, this.checkExistingEmail.bind(this) ],),
      'pass' : new FormControl(),
      'learn' : new FormControl(),
      'hobbies' : new FormArray([])
    });
  }
  onSubmit(){
    console.log(this.signupForm);
  }

  getAllControls(){
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
  onAddHobbies(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  checkExistingEmail(control: FormControl) : {[s:string]: boolean} {
    if(this.registeredEmail.indexOf(control.value) != -1)
    {
      return {'registered' : true};
    }
  }

}
