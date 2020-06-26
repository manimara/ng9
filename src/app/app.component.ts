import { Component } from '@angular/core';
import { animation } from '@angular/animations';
import {slideInAnimation} from '../app/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [ slideInAnimation ]
})
export class AppComponent {
  title = 'ng9';

  getAnimationData(outlet : RouterOutlet){
    console.log(outlet.activatedRoute);

    return outlet && outlet.activatedRoute &&
      outlet.activatedRoute["animation"];
  }
}
