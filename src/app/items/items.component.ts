import {Component, OnInit} from '@angular/core';
import {ItemApiService} from '../item-api.service';
import {Item} from '../item';
import { Location } from '@angular/common';


@Component({
  selector: 'app-item-list',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public myItems: Item[] = [];
  searchText = '';
  selectedItem: Item | undefined;
  onSelect(item: Item): void {
    this.selectedItem = item;
  }
  constructor(private itemService: ItemApiService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getItems();
  }
  private getItems(): void {
    this.itemService.findAllItems()
      .subscribe(result => this.myItems = result);
  }

  goBack(): void {
    this.location.back();
  }
}
