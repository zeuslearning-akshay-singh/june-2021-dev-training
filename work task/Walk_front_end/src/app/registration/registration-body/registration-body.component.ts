import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { personal_preference } from '../register';


@Component({
  selector: 'app-registration-body',
  templateUrl: './registration-body.component.html',
  styleUrls: ['./registration-body.component.scss']
})
export class RegistrationBodyComponent implements OnInit {

  choices = personal_preference;
  @Input() registered;
  step: any = 1;
 

  register = new FormGroup({
    personal_detail: new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      resume: new FormControl(''), 
      referral: new FormControl(''),
      protfolio: new FormControl(''),
      profile_img : new FormControl(''),
      jobPrefrences: new FormArray([]),
    })
    ,
    qualification_detail: new FormGroup({
      aggregate: new FormControl(''),
      passing_year: new FormControl(''),
      degree: new FormControl(''),
      course: new FormControl(''),
      college: new FormControl(''), 
      other_college: new FormControl('-'),
      college_location: new FormControl(''),
      professional : new FormControl(''),
      year_experience: new FormControl(''),
      current_ctc: new FormControl(''),
      expected_ctc:new FormControl(''),
      other_tech: new FormControl('-'),
      other_familiar_tech:new FormControl('-'),
      notice_period:new FormControl(''),
      notice_end:new FormControl(''),
      notice_month:new FormControl(''),
      reappear:new FormControl(''),
      reappear_if:new FormControl(''),
      experienced : new FormGroup({
        JavaScript : new FormControl(''),
        AngularJS : new FormControl(''),
        React : new FormControl(''),
        NodeJS : new FormControl(''),
        Others : new FormControl('')
      }),
      familiar : new FormGroup({
        JavaScript : new FormControl(''),
        AngularJS : new FormControl(''),
        React : new FormControl(''),
        NodeJS : new FormControl(''),
        Others : new FormControl('')
      })
    }),
    qualification_fresher: new FormGroup({
      reappear_fresher:new FormControl(''),
      reappear_if_fresher:new FormControl(''),
      qualified_fresher : new FormGroup({
        JavaScriptjs : new FormControl(''),
        AngularJS : new FormControl(''),
        React : new FormControl(''),
        NodeJS : new FormControl(''),
        Others : new FormControl('')
      })
    })
  })
data: any;
  

  constructor() { }

  ngOnInit(): void {
    this.data = this.register;
    
  }

  submit(){
    this.step = this.step + 1;
  }

  previous(){
    this.step=this.step - 1;
  }

}
