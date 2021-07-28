import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CARDS } from '../walk-card';


@Component({
  selector: 'app-walkin-component',
  templateUrl: './walkin-component.component.html',
  styleUrls: ['./walkin-component.component.scss']
})
export class WalkinComponentComponent implements OnInit {

  cards = CARDS;
  public employees;
  public location;
  public destination;
  
  constructor(private _walk : ApiService) { }

  ngOnInit(): void {
    this._walk.getWalk()
    .subscribe((data : any) => {
      this.employees = (data.data); 
      this.location = (data.location);
      this.destination = (data.destination);

      this.employees.forEach((element:any)=>{
        element.jobroles = [];
        this.destination.forEach((dest:any)=>{
          if(element.walk_in_id === dest.walk_in_id){
            element.jobroles.push(dest.designation)
          }
        })
      })

      this.employees.forEach((element:any)=>{
        this.location.forEach((loc:any)=>{
          if(element.walk_in_id === loc.walk_in_id){
            element.city = loc.city
          }
        })
      })

      console.log(this.employees)
    }
    
    );}

}
