import { Component, OnInit } from '@angular/core';
import {flatMap, Observable, tap} from "rxjs";
import {Item} from "../model/Item";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item$!: Observable<Item>;
  itemForm!: FormGroup;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      id: '',
      name: '',
      description: '',
      price: '',
      amountOfStock: '',
      stockUrgency: ''
    });
    this.item$ = this.route.paramMap
      .pipe(
        flatMap(param => this.itemService.getItem(param.get('id'))),
        tap(item => this.itemForm.patchValue(item))
      );
  }

  save(value: Item): void {
    this.itemService.saveItem(value.id, value).subscribe(_ => console.log('saved!'));
  }

}
