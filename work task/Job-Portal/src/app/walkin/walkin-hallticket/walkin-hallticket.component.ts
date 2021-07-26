import { Component, OnInit } from '@angular/core';
import { TICKET } from '../walk-card';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-walkin-hallticket',
  templateUrl: './walkin-hallticket.component.html',
  styleUrls: ['./walkin-hallticket.component.scss']
})
export class WalkinHallticketComponent implements OnInit {

  // ticket = TICKET;
  public entered_info;


  constructor(private _tickets :ApiService) { }

  ngOnInit(): void {
    this._tickets.getHallticket()
    .subscribe(info => {this.entered_info = (info);
      console.log(this.entered_info);
    });
    
  }

}
