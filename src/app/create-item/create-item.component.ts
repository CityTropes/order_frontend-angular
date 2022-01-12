import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm} from "@angular/forms";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void{
    this.itemService.addItem(form.value)
      .subscribe(input => {
        console.log(input);
        form.reset();
        this.itemService.getItems();
        alert("Item is added.");
      })
  }

  cancel(form: NgForm) {
    form.reset();
  }

}
