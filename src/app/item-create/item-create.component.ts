import { Component, OnInit } from '@angular/core';
import {ItemApiService} from '../item-api.service';
import {Item} from '../item';
import {MessageService} from '../message.service';
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  constructor(private itemService: ItemApiService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
  }

  public add(name: string, description: string, price: string, amountOfStock: string): void {
    const priceToNumber: number = parseInt(price, 10);
    const amountToNumber: number = parseInt(amountOfStock, 10);
    if (description.length > 255){
      this.messageService.add('description can be max 255 characters');
    }
    if (priceToNumber < 0 || amountToNumber < 0){
      this.messageService.add('no negative numbers allowed for price or amount');
    }
    const newItem = new Item(name, description, price, amountToNumber);
    this.itemService.addItem(newItem)
      .subscribe();
    this.returnToOverview();
  }
  public returnToOverview(): void{
    this.router.navigate(['/items']);
  }
}
