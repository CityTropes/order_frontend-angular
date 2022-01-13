import {Component, Input} from '@angular/core';
import {Item} from "../model/Item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent{

  @Input() item!: Item

  //or use items$!: Observable<Item[]>; and in html:
// <ul>
// <li *ngFor="let item of items$ | async">
// <p>{{item.id}}</p>
// <a [routerLink]="'/items/' + item.id">Link</a>
//   </li>
//   </ul>

}
