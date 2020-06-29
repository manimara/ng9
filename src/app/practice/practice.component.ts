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

  }

}
