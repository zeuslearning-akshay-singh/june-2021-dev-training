import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  isCollapsed:boolean=true;
  isAlert: boolean = true;
  isBell: boolean=true;
  ovBell:boolean=false;
  ovAlert:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  myFunction(){
    this.isCollapsed=!this.isCollapsed;
  }

  myalert(){
    this.isAlert=!this.isAlert;
    this.ovAlert=!this.ovAlert;
  } 

  mybell(){
    this.isBell=!this.isBell;
    this.ovBell=!this.ovBell; 
  }
}
