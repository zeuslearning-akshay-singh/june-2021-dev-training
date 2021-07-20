import { Component, OnInit } from '@angular/core';
import { TICKET } from '../walk-card';

@Component({
  selector: 'app-walkin-hallticket',
  templateUrl: './walkin-hallticket.component.html',
  styleUrls: ['./walkin-hallticket.component.scss']
})
export class WalkinHallticketComponent implements OnInit {

  ticket = TICKET;

  constructor() { }

  ngOnInit(): void {
  }

}
