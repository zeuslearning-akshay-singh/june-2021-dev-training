import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobroles',
  templateUrl: './jobroles.component.html',
  styleUrls: ['./jobroles.component.scss']
})
export class JobrolesComponent implements OnInit {

  showJob = false;
  @Input() jobProfile;
  showImg=false;
  img_src="assets/images/expand_more_black_24dp.svg";
  constructor() { }

  ngOnInit(): void {
  }
  displayJob(){
    this.showJob = !this.showJob;
    this.showImg = !this.showImg;
    if (this.showImg == true){
      this.img_src = "assets/images/expand_less_black_24dp.svg"
    }
    else{
      this.img_src = "assets/images/expand_more_black_24dp.svg"
    }
  }
}
