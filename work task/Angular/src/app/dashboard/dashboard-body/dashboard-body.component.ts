import { Component, OnInit } from '@angular/core';
import { COURSES } from '../list';
import { coure } from '../cour';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.scss']
})
export class DashboardBodyComponent implements OnInit {
  courses = COURSES;

  constructor() { }
 
  ngOnInit(): void {
  }

}
