import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Output()
  public onDeleteEmitter: EventEmitter<string> = new EventEmitter();


  @Input()
  public character_list : Character[] = [{
    name:'Trunks',
    power:10
  }]


  onDelete(id?:string):void {

    if(!id) return;
    this.onDeleteEmitter.emit(id);
  }

}