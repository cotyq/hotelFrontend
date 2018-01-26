import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: 'stars.component.html',
  styleUrls: ['stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() stars: number;

  constructor() { }

  ngOnInit() {
  }

  getRepetitions(n: number): number[] {
    return new Array(n);
  }

}
