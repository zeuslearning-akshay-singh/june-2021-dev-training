import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.scss']
})
export class LoginBodyComponent implements OnInit {

  login_detail = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  }) 

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(){}
}
