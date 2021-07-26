import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url:string = 'http://localhost/connection/Api/walk_in.php';
  private _walk_detail: string = 'http://localhost/connection/Api/walk_in_detail.php';
  private _hallticket:string = 'http://localhost/connection/Api/hallticket.php';
  


  constructor(private http: HttpClient) {}
  getWalk(){
    return this.http.get(this._url);
  }

  getDetail(){
    return this.http.get(this._walk_detail);
  }

  getHallticket(){
    return this.http.get(this._hallticket);
  }
}
