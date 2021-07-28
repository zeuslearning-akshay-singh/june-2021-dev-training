import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.scss']
})
export class LoginBodyComponent implements OnInit {

  public msg:any;

  credentials : any;

  // User login form
  login_detail = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  }) 

  // constructor has router for navigation Routing
  constructor( private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
  }

  // verifying the login credentials and retruning the userid
  loginUser(detail){
    // this.credentials={
    //   username: this.login_detail.get('username')?.value,
    //   password: this.login_detail.get('password')?.value
    // };
    // console.log("Send this credentials",this.credentials);

    this.http.post('http://localhost/connection/login.php',detail)
    .subscribe((result)=>{this.msg = result;

      let num2 = this.msg['message'];
      // let num= this.msg.map(a => a.user_id);
      // console.log(num);
      if(!num2){
        var data = this.msg;
        var s = JSON.stringify(data[0].user_id);
        var d = JSON.parse(s);
        console.log(d);
        this.router.navigate(['/walkin-component']);
        localStorage.setItem('user', d);
      }
    });
  }
}
