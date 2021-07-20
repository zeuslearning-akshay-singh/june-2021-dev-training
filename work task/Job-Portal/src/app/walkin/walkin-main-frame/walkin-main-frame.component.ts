import { Component, OnInit } from '@angular/core';
import { CARDS, JOBS } from '../walk-card';

@Component({
  selector: 'app-walkin-main-frame',
  templateUrl: './walkin-main-frame.component.html',
  styleUrls: ['./walkin-main-frame.component.scss']
})
export class WalkinMainFrameComponent implements OnInit {

  walk_in = JOBS;
  constructor() { }

  ngOnInit(): void {
  }

}
