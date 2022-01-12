import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {HttpClientModule} from "@angular/common/http";
import { ItemComponent } from './item/item.component';
import { ItemGalleryComponent } from './item-gallery/item-gallery.component';
import { NameFilterPipe } from './pipe/name-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateItemComponent } from './create-item/create-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemGalleryComponent,
    NameFilterPipe,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    ItemGalleryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
