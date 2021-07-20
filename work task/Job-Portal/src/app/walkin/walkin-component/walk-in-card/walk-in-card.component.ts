import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-walk-in-card',
  templateUrl: './walk-in-card.component.html',
  styleUrls: ['./walk-in-card.component.scss']
})
export class WalkInCardComponent implements OnInit {


  @Input() card;
  constructor() { }

  ngOnInit(): void {
  }

}
