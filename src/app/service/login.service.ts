import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

 
  login(username: string, password: string): Observable<any> {
    const url = 'https://testproj2.cloudiax.com/api/user/login';
    const data = { username, password };
    return this.http.post(url, data);
  }
}
