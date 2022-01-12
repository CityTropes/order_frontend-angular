import { Component, OnInit } from '@angular/core';
import {Item} from "../model/Item";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-item-gallery',
  templateUrl: './item-gallery.component.html',
  styleUrls: ['./item-gallery.component.css']
})
export class ItemGalleryComponent implements OnInit {

  items : Item[] = []
  searchText:string;

  constructor(private itemService: ItemService) {
    this.searchText = "";
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems():void{
    this.itemService.getItems().subscribe(items => this.items = items)
  }

}
