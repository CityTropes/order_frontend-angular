import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../model/Item";

@Pipe({ name: 'nameFilter'})
export class NameFilterPipe implements PipeTransform {

  transform(items: Item[], searchText: string) : any[] {
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
