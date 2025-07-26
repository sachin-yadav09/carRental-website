import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../models/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signupUrl = 'http://127.0.0.1:8000/carRentalapp/signup/';
  private loginUrl = 'http://127.0.0.1:8000/carRentalapp/login/';

  constructor(private http: HttpClient) {}

  signup(data: AuthData): Observable<any> {
    return this.http.post(this.signupUrl, data);
  }

  login(data: AuthData): Observable<any> {
    return this.http.post(this.loginUrl, data);
  }
}
