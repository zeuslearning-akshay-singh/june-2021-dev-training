import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { personal_preference } from '../register';


@Component({
  selector: 'app-registration-body',
  templateUrl: './registration-body.component.html',
  styleUrls: ['./registration-body.component.scss']
})
export class RegistrationBodyComponent implements OnInit {

  choices = personal_preference;
  step: any = 1;
 

  register = new FormGroup({
    personal_detail: new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email_id: new FormControl(''),
      password: new FormControl(''),
      phone_number: new FormControl(''),
      resume_link: new FormControl(''), 
      protfolio_url: new FormControl(''),
      referral_employee: new FormControl(""),
      update_regarding_job : new FormControl(''),
      jobPrefrences: new FormControl(''),
      img : new FormControl(''),

      aggreagate_percentage: new FormControl(''),
      year_of_passing: new FormControl(''),
      qualification: new FormControl(''),
      stream: new FormControl(''),
      college: new FormControl(''),
      other_college: new FormControl(),
      college_location: new FormControl(''),
      applicant_type: new FormControl(''),

      experience_years: new FormControl(''),
      current_ctc: new FormControl(''),
      expected_ctc: new FormControl(''),
      expertise_technology: new FormControl(''),
      other_expertise_technology: new FormControl(""),
      familiar_technology: new FormControl(''),
      other_familiar_technology: new FormControl(""),
      on_notice_period: new FormControl(''),
      notice_period_end: new FormControl(""),
      long_notice_period: new FormControl(""),
      appeared_before: new FormControl(''),
      role_applied_before: new FormControl(""),

    })
})
  


  constructor( private router : Router,private http: HttpClient) { }

  ngOnInit(): void {  
  }

  msg;
  FormSub(data){
    console.log(data.personal_detail);
    let information = data.personal_detail
    console.log(information)

    this.http.post('http://localhost/registartion/api/register.php',information)
    .subscribe((result)=>{this.msg = result;

      let num2 = this.msg['message'];
      console.log(num2)
      if(num2 === "Perfect"){
        this.router.navigate(['/login-component']);
      }
    }); 
  }

  submit(){
    this.step = this.step + 1;
  
  }

  previous(){
    this.step=this.step - 1;
  }

}
