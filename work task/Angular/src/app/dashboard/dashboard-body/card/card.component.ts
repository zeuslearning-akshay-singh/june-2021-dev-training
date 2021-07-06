import { Component, Input, OnInit } from '@angular/core';
import { coure } from '../../cour';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() course: coure;
  constructor() { }

  ngOnInit(): void {
  }

}
