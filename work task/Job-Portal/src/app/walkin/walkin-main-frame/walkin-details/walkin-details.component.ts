import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-walkin-details',
  templateUrl: './walkin-details.component.html',
  styleUrls: ['./walkin-details.component.scss']
})
export class WalkinDetailsComponent implements OnInit {

  showJob=false;
  showImg=false;
  showInst=false;
  img_src="assets/images/expand_more_black_24dp.svg";
  pre_img_src="assets/images/expand_more_black_24dp.svg";

  @Input() card;
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

  displayInst(){
    this.showInst = !this.showInst;
    this.showImg = !this.showImg;
    if (this.showImg == true){
      this.pre_img_src = "assets/images/expand_less_black_24dp.svg"
    }
    else{
      this.pre_img_src = "assets/images/expand_more_black_24dp.svg"
    }
  }

}
