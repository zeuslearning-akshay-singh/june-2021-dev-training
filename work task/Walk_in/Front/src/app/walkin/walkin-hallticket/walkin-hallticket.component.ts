import { Component, OnInit } from '@angular/core';
import { TICKET } from '../walk-card';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-walkin-hallticket',
  templateUrl: './walkin-hallticket.component.html',
  styleUrls: ['./walkin-hallticket.component.scss']
})
export class WalkinHallticketComponent implements OnInit {

  // ticket = TICKET;
  public entered_info;
  id: any;


  constructor(private _tickets :ApiService, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') as string;
    });
    console.log(this.id);

    this._tickets.getHallticket(this.id)
    .subscribe(info => {this.entered_info = (info);
      console.log(this.entered_info);
    });
    
  }

}
