import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CARDS, JOBS } from '../walk-card';

@Component({
  selector: 'app-walkin-main-frame',
  templateUrl: './walkin-main-frame.component.html',
  styleUrls: ['./walkin-main-frame.component.scss']
})
export class WalkinMainFrameComponent implements OnInit {

  public guid:any
  walk_in = JOBS;
  // public walk_in_info: any;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.guid = params.get('id') as string;
    });
    console.log(this.guid)
}}
