import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';

import {HttpClientModule} from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule } from '@angular/forms';
import {FilterPipe} from './filter-pipe';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    MessagesComponent,
    FilterPipe,
    ItemCreateComponent,
    ItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
