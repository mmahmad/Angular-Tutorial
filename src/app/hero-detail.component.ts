//a-component creates the snippet for component

import { Component, Input } from '@angular/core';
import { Hero } from './hero'



@Component({
    selector: 'hero-detail',
    // templateUrl: 'name.component.html'
    template:
    `
    <div *ngIf="heroo">
        <div><label>id: </label>{{heroo.id}}</div>
        <div>
            <label>name: </label><input [(ngModel)]="heroo.name" placeholder="name">
        </div>
  </div>
    
    `
})

export class HeroDetailComponent {

    // hero : Hero;
    @Input() heroo : Hero;
    constructor() { }

    
}