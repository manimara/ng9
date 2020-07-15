import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import { error } from 'protractor';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  count: number = 0;
  count$ : Observable<number> = Observable.create((observer) => {
    let count = 0;
    setInterval(() => {
      observer.next(count);
      if(count == 3){
        observer.error(new Error('count should be less then 5'));
      }

      if(count == 4){
        observer.complete();
      }
      count ++;
    }, 1000);
  });

  @ViewChild('f') signupForm : NgForm;
  userData : Object = {};
  learningOptions = ['Basic', 'Advanced', 'Pro']
  defaultLearningOption = 'Advanced';


  constructor() { }

  ngOnInit(): void {

  }


}
