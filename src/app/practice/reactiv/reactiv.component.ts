import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'email' : new FormControl('initial Value',[Validators.required, Validators.email ],),
      'pass' : new FormControl(),
      'learn' : new FormControl(),

    });
  }
  onSubmit(){
    console.log(this.signupForm);

  }

}
