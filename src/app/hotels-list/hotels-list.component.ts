import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from "../hotels/hotel";

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  @Input() hotels: Hotel[];

  constructor() { }

  ngOnInit() {
  }

}
