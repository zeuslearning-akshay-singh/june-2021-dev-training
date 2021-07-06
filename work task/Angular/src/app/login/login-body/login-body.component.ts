import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.scss']
})
export class LoginBodyComponent implements OnInit {
  imgBackLogin="assets/icon/sort.svg"
  imgPreviewLogin="assets/icon/preview.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
