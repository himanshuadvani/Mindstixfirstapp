import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url="/assets/Data/Users.json";

  getUsers():Observable<any>
  {
    return this.http.get(this.url);
  }
}
