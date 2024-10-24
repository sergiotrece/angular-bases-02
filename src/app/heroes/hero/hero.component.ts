import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  public name: string = 'ironman';
  public age: number = 45;


  get capitalizedName(): string {
    return this.name .toUpperCase();
  }

  get HeroDesc():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {

    this.name = 'Spiderman';
  }

  changeAge():void {

    this.age = 22;

  }

  resetNameAge():void {

    this.name = 'ironman';
    this.age = 45

  }
}
