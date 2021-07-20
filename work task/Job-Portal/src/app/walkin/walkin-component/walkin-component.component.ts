import { Component, OnInit } from '@angular/core';
import { CARDS } from '../walk-card';


@Component({
  selector: 'app-walkin-component',
  templateUrl: './walkin-component.component.html',
  styleUrls: ['./walkin-component.component.scss']
})
export class WalkinComponentComponent implements OnInit {

  cards = CARDS;

  constructor() { }

  ngOnInit(): void {
  }

}
