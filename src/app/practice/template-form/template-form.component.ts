import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('f') signupForm : NgForm;

  userData : user = { email : "",
    learn : "",
    pass:""
  };
  learningOptions = ['Basic', 'Advanced', 'Pro']
  defaultLearningOption = 'Advanced';
  isSubmitted = false;
  constructor() { }

  ngOnInit(): void {
    // this.signupForm.form.patchValue({
    //   userData : {
    //     learn : this.defaultLearningOption
    //   }
    // })
  }

  onsubmit(f : NgForm){
    // debugger;
    console.log(f);
  }

  onsubmit1(){
    // debugger;
    console.log(this.signupForm);
    this.isSubmitted = true;
    this.userData.email = this.signupForm.value.email;
    this.userData.learn = this.signupForm.value.learn;
    this.userData.pass = this.signupForm.value.pass;
    this.signupForm.reset();
  }

}

interface user {
  email : String;
  learn : String;
  pass : String;
}
