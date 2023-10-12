import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string ='ironman';
  public edad:number = 45;


  get capitalizedName():string{
    return this.name.toUpperCase();
  }


  getheroDescription():string{
    return `${this.name} - ${this.edad}`
  }


  changeHero(name:string):void {
    this.name = name
  }

  changeAge(edad:number) {
    this.edad = edad;
  }


  resetForm():void {
    this.name = 'ironman';
    this.edad = 45;
  }
}
