import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, ActivatedRouteSnapshot } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IHero } from '../Hero.interface';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input('id') id;
  _hero : Observable<any>;
  hero$ : Observable<any>;
  myid: Observable<any>;
  idVal : String;
  next: Number;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    // private snap : ActivatedRouteSnapshot,
    private service : LocalStorageService,
    ) { }

  ngOnInit(): void {
    this.getTheHeroID();
  }


  getTheHeroID(){
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params : ParamMap) => {
          // console.log(params.get('id'));        
          //params.get('id');
          this.myDebuggingFunction(params.get('id'))
          // return params.get('id');
          this.idVal = params.get('id'); //this.service.getJsonToken()
          this.next = +this.idVal + 1;
          return this.idVal;
        })
    );
  }
  myDebuggingFunction(v){
    console.log(v);
    
  }

  params1(){
    this.myid = this.route.params.pipe(  map(p => {
     console.log(p.id);
      return p.id;
    }));

    // this.route.paramMap
  }

  gotoHeros(){
      this.router.navigate(["/heros", {opt: 1, foo: 'bar'}]);
  }
}
