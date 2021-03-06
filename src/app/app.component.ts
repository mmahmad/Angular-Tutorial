import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from "./hero.service";

@Component({
  selector: 'app-root',
  template: `

  <h1>
    {{title}}
  </h1>

  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
      <!-- each hero goes here -->
      <span class="badge">{{hero.id}}</span>{{hero.name}}
    </li>
  </ul>

  <!--<h2>
    {{selectedHero.name}} details!
  </h2> -->

  <hero-detail [heroo]="selectedHero"></hero-detail>




  `,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
    

})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    // this.getHeroesSynchronously();
    this.getHeroesViaPromise();
  }
  title = 'Tour of Heroes';
  // hero = 'Windstorm';

 
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  selectedHero : Hero;
  heroes : Hero[];

  constructor(private heroService: HeroService){
    
  }


  getHeroesSynchronously(){
    this.heroes = this.heroService.getHeroesSynchronously(); //<-- when not using Promise. Simulates data acquistion in asynchronous
  }

  getHeroesViaPromise(){
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
    })
  }

onSelect(hero : Hero) : void{
  this.selectedHero = hero;
}


}