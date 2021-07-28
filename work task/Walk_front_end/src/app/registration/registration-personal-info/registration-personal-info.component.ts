import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { PERSONAL, personal_preference } from '../register';

@Component({
  selector: 'app-registration-personal-info',
  templateUrl: './registration-personal-info.component.html',
  styleUrls: ['./registration-personal-info.component.scss']
})
export class RegistrationPersonalInfoComponent implements OnInit {

  userDetailform: FormGroup;
  
  constructor(private rootFormGroup : FormGroupDirective) { }

  choices = personal_preference;

  @Input() isreadOnly : boolean;
  
  info!:FormGroup

  ngOnInit(): void {
    this.info = this.rootFormGroup.control;

    this.userDetailform = this.rootFormGroup.control.get('personal_detail') as FormGroup;

  } 
  proUser = new FormArray([]);
  array = this.proUser;
  onCheckboxChange(e: any, section: string) {

    console.log(e);

    // Assigning value
    if (section == 'user') {
      this.array = this.proUser;
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
    if (section == 'user') {
      this.userDetailform.setControl('jobPrefrences', this.array);
    }

  }
}



