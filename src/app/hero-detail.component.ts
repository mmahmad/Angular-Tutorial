import { Component, Input } from '@angular/core';
import { Hero } from './hero'



@Component({
    selector: 'hero-detail',
    // templateUrl: 'name.component.html'
    template:
    `
    <div *ngIf="hero">
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label><input [(ngModel)]="hero.name" placeholder="name">
        </div>
  </div>
    
    `
})

export class HeroDetailComponent {

    // hero : Hero;
    @Input() hero : Hero;
    constructor() { }

    
}