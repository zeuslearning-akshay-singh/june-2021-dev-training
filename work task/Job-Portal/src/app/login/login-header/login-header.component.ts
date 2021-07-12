import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent implements OnInit {
  imgNavbar="assets/icon/logo used in header.svg"
  constructor() { }

  ngOnInit(): void {
  }

}
