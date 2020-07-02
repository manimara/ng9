import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiv',
  templateUrl: './reactiv.component.html',
  styleUrls: ['./reactiv.component.scss']
})
export class ReactivComponent implements OnInit {
  learningOptions = ['Basic', 'Advanced', 'Pro']
  defaultLearningOption = 'Advanced';
  isSubmitted = false;
  userData: Object = {};
  signupForm: FormGroup;
  registeredEmail = ['abc@abc.abc', 'def@def.def'];
  checkEmail = ['abcd@abc.abc', 'abcd@def.def'];
  issubmitting: boolean = false;
  firstErrorControlName: string = "";
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'email': new FormControl('initial Value',
        [Validators.required, Validators.email, this.checkExistingEmail.bind(this)],
        this.checkAsyncMail.bind(this)
      ),
      'pass': new FormControl(),
      'learn': new FormControl(),
      'hobbies': new FormArray([]),
      'pass1': new FormControl(),
      'fname': new FormControl({ value: "my name" }),
    });
  }
  onSubmit() {
    this.issubmitting = true;
    if (this.signupForm.status == 'INVALID') {
      const allControls = this.signupForm.controls;
      for (let key in allControls) {
        if (allControls.hasOwnProperty(key)) {
          console.log(key);
          if (this.signupForm.get(key).status == 'INVALID') {
            this.firstErrorControlName = key;
            return false;
          }
        }
      }
    }
    console.log(this.signupForm);

    // email = this.signupForm.get('email')
  }

  getAllControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
  onAddHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  checkExistingEmail(control: FormControl): { [s: string]: boolean } {
    if (this.registeredEmail.indexOf(control.value) != -1) {
      return { 'registered': true };
    }
  }

  checkAsyncMail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.checkEmail.indexOf(control.value) != -1) {
          resolve({ 'isCheckValid': true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
