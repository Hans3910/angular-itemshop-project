import { Component, OnInit, Input } from '@angular/core';
import { Item} from '../item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ItemApiService} from '../item-api.service';
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Item | undefined;
  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private itemService: ItemApiService,
              private router: Router) { }
  ngOnInit(): void {
    this.getItem();
  }

  public getItem(): void {
    // @ts-ignore
    const id: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  public goBack(): void {
    this.router.navigate(['/items']);
  }
}
