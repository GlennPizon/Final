import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl=`${environment.apiUrl}`

  constructor(private http: HttpClient){}

  register(userData: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/accounts/register`,userData);
  }

  authenticate(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/accounts/authenticate`, credentials);
  }

  verifyEmail(credentials:any) : Observable<any>{
    return this.http.post(`${this.apiUrl}/accounts/verify-email`, credentials);
  }

  forgotPassword(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/accounts/forgot-password`, credentials);
  }

  validateResetToken(){}

  resetPassword(credentials:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/accounts/reset-password`, credentials);
  }

  refreshToken(){}

  revokeToken(){}

  getAll(){}

  getById(){}

  update(){}

  delete(){}

}
