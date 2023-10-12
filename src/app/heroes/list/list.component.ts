import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes:string[] = ['Spiderman','Hulk','Batman','Superman']
  public nameDeleteHero?:string;

  eliminarHeroe():void{
    const deleteHero = this.heroes.pop();
    this.nameDeleteHero = deleteHero;
  }
}
