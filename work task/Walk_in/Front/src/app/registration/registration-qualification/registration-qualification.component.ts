import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { fam_tech } from '../register';

@Component({
  selector: 'app-registration-qualification',
  templateUrl: './registration-qualification.component.html',
  styleUrls: ['./registration-qualification.component.scss']
})
export class RegistrationQualificationComponent implements OnInit {
  isReadOnly = false;

  options ;
  model;

  technology=fam_tech;
  userDetailform: FormGroup;
  info!:FormGroup

  constructor(private rootFormGroup : FormGroupDirective) { }

  reg_qualification!:FormGroup;

  ngOnInit(): void {
    this.reg_qualification = this.rootFormGroup.control;
    this.userDetailform = this.rootFormGroup.control.get('personal_detail') as FormGroup;
  }

  proUser = new FormArray([]);
  noobUser = new FormArray([]);
  array = this.proUser;
  onCheckboxChange(e: any, section: string) {

    console.log(e);

    // expertise

    // Assigning value
    if (section == 'familiar') {
      this.array = this.proUser;
    }

    if (section == 'expertise') {
      this.array = this.noobUser;
    }

    //Pushing in the array
    
    if (e.target.checked) {
      this.array.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      this.array.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          this.array.removeAt(i);
          return;
        }
        i++;
      });
    }

    // Overwritting in the array
    if (section == 'familiar') {
      let element = new FormControl(this.array.value.toString());
      this.userDetailform.setControl('familiar_technology', element);
    }

    if (section == 'expertise') {
      let element = new FormControl(this.array.value.toString());
      this.userDetailform.setControl('expertise_technology', element);
    }

  }

}
