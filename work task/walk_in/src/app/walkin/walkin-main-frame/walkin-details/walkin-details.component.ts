import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-walkin-details',
  templateUrl: './walkin-details.component.html',
  styleUrls: ['./walkin-details.component.scss']
})
export class WalkinDetailsComponent implements OnInit {

  @Input() guid;
  showJob=false;
  showImg=false;
  showInst=false;
  img_src="assets/images/expand_more_black_24dp.svg";
  pre_img_src="assets/images/expand_more_black_24dp.svg";

  @Input() card;
  @Input() in_detail;

  public destination: any;
  public info: any;
  public instruction: any;
  public job: any;
  public location: any;
  public prefrences: any;
  public timeslot: any;


  user_preferences = new FormGroup({
    walk_in : new FormControl(''),
    user_id :  new FormControl(''),
    time_slot : new FormControl(''),
    user_resume : new FormControl(),
    walk_in_job_role : new FormControl([])
  })
  
  constructor(private _details : ApiService) { }

  ngOnInit(): void {

    this._details.getDetail(this.guid)
    .subscribe((detailing:any) => {this.destination = (detailing.destination);
      this.info = (detailing.info);
      this.instruction = (detailing.instruction);
      this.job = (detailing.job);
      this.location = (detailing.location);
      this.prefrences = (detailing.preferences);
      this.timeslot = (detailing.timeslot);
      console.log(this.destination);
      console.log(this.info);
      console.log(this.instruction);
      console.log(this.job);
      console.log(this.location);
      console.log(this.prefrences);
      console.log(this.timeslot);
    }
      );


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
