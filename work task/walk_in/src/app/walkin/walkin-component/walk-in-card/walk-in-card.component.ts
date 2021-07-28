import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walk-in-card',
  templateUrl: './walk-in-card.component.html',
  styleUrls: ['./walk-in-card.component.scss']
})
export class WalkInCardComponent implements OnInit {


  // @Input() card;
  @Input() content;

user = true

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickLogin(walk_in_id){
    let id = localStorage.getItem('user');
      if(id){
        this.router.navigate(['/walkin-main-frame',walk_in_id]);
        
      }else{
        this.router.navigate(['/login-component']);
      }
  }

}
