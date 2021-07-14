import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-registration-body',
  templateUrl: './registration-body.component.html',
  styleUrls: ['./registration-body.component.scss']
})
export class RegistrationBodyComponent implements OnInit {

  step: any = 1;

  multistep = new FormGroup({
    personalInfo: new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl('') 
    })
  })

  constructor() { }

  ngOnInit(): void {
    
  }

  submit(){
    this.step = this.step + 1;
  }

  previous(){
    this.step=this.step - 1;
  }

}
