import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CARDS, JOBS } from '../walk-card';

@Component({
  selector: 'app-walkin-main-frame',
  templateUrl: './walkin-main-frame.component.html',
  styleUrls: ['./walkin-main-frame.component.scss']
})
export class WalkinMainFrameComponent implements OnInit {

  walk_in = JOBS;
  // public walk_in_info: any;
  constructor(private _details : ApiService) { }

  ngOnInit(): void {
    // this._details.getDetail()
    // .subscribe((detailing:any) => {this.destination = (detailing.destination);
    //   this.info = (detailing.info);
    //   this.instruction = (detailing.instruction);
    //   this.job = (detailing.job);
    //   this.location = (detailing.location);
    //   this.prefrences = (detailing.prefrences);
    //   this.timeslot = (detailing.timeslot);
    // console.log(this.destination)}
    // );
}}
