import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';

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
  // signupForm : FormGroup;
  constructor() { }

  ngOnInit(): void {
    // this.signupForm =
  }

}
