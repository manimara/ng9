import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  @ViewChild('f') signupForm : NgForm;
  userData : Object = {};
  learningOptions = ['Basic', 'Advanced', 'Pro']
  defaultLearningOption = 'Advanced';

  constructor() { }

  ngOnInit(): void {
    // this.signupForm.controls.learn.setValue(this.defaultLearningOption);
    this.signupForm.form.patchValue({
      userData : {
        learn : this.defaultLearningOption
      }
    })
  }

  onsubmit(f : NgForm){
    // debugger;
    console.log(f);
  }

  onsubmit1(){
    // debugger;
    console.log(this.signupForm);
    this.userData.email = this.signupForm.value.email;
    this.userData.learn = this.signupForm.value.learn;
    this.userData.pass = this.signupForm.value.pass;
    this.signupForm.reset();
  }

}
