import { registerLocaleData } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PERSONAL } from '../register';

@Component({
  selector: 'app-registration-review',
  templateUrl: './registration-review.component.html',
  styleUrls: ['./registration-review.component.scss']
})
export class RegistrationReviewComponent implements OnInit {
  
  infos = PERSONAL;

  
  constructor() { }

  ngOnInit(): void {
  }

}
