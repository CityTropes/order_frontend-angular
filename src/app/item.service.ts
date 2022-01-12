import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Item} from "./model/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url = `${environment.backendUrl}/items`

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }


  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url).pipe(
      map((items) => items.sort((a: Item, b: Item) => a.name.localeCompare(b.name))
      )
    )
  }

  getItem(id : string | null): Observable<Item>{
    return this.http.get<Item>(`${this.url}/${id}`)
  }

  addItem(item:Item): Observable<Item>{
    return this.http.post<Item>(this.url, item);
  }

}
