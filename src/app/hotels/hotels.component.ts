import { Component, OnInit } from '@angular/core';
import { Hotel } from './hotel';
import { HotelService } from './hotel.service';
import { Filter } from "./filter";
import { FormControl } from "@angular/forms";

import * as _ from "lodash";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: Hotel[];
  searchText: string;
  filter: Filter;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.filter = new Filter;
    this.getHotels();
  }

  onStarsSelectionChange(selected: number): void {
    (this.isSelected(selected)) ? _.pull(this.filter.stars, selected) : this.filter.stars.push(selected);
    this.getHotels();
  }

  onStarsSelectAll(): void {
    this.filter.stars = [];
    this.getHotels();
  }

  isSelected(stars: number): boolean {
    return this.filter.stars.indexOf(stars) >= 0;
  }

  getHotels(): void {
    this.hotelService.getHotels(this.filter)
      .subscribe(hotels => {
        this.hotels = hotels;
      });
  }

}
