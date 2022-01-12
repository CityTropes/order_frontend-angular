import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../model/Item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item | any

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



}
