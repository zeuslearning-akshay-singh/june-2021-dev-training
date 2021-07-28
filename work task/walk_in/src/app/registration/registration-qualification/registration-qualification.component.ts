import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { fam_tech } from '../register';

@Component({
  selector: 'app-registration-qualification',
  templateUrl: './registration-qualification.component.html',
  styleUrls: ['./registration-qualification.component.scss']
})
export class RegistrationQualificationComponent implements OnInit {
  isReadOnly = false;

  options ;

  technology=fam_tech;

  constructor(private rootFormGroup : FormGroupDirective) { }

  reg_qualification!:FormGroup;
  fresher_qualification: FormGroup;
  tech_qualification: FormGroup;
  exp_qualification: FormGroup;

  ngOnInit(): void {
    this.reg_qualification = this.rootFormGroup.control;
    this.fresher_qualification = this.rootFormGroup.control;
    this.tech_qualification = this.rootFormGroup.control;
    this.exp_qualification = this.rootFormGroup.control;
    this.exp_qualification = this.rootFormGroup.control;
  }

}
