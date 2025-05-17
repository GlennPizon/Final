import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from '../_models/account';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private accountSubject: BehaviorSubject<Account | null>;
  public account: Observable<Account | null>;

  constructor(private http: HttpClient) {
    const storedAccount = localStorage.getItem('account');
    this.accountSubject = new BehaviorSubject<Account | null>(storedAccount ? JSON.parse(storedAccount) : null);
    this.account = this.accountSubject.asObservable();
  }

  public get userValue(): Account | null {
    return this.accountSubject.value;
  }

  login(email: string, password: string): Observable<Account> {
    return this.http.post<Account>(`${environment.apiUrl}/accounts/authenticate`, { email, password })
      .pipe(map(account => {
        localStorage.setItem('account', JSON.stringify(account));
        this.accountSubject.next(account);
        return account;
      }));
  }

  logout() {
    localStorage.removeItem('account');
    this.accountSubject.next(null);
  }

  register(account: Account) {
    return this.http.post(`${environment.apiUrl}/accounts/register`, account);
  }

  verifyEmail(token: string) {
    return this.http.post(`${environment.apiUrl}/accounts/verify-email`, { token });
  }

  forgotPassword(email: string) {
    return this.http.post(`${environment.apiUrl}/accounts/forgot-password`, { email });
  }

  resetPassword(token: string, password: string, confirmPassword: string) {
    return this.http.post(`${environment.apiUrl}/accounts/reset-password`, {
      token,
      password,
      confirmPassword
    });
  }

  refreshToken() {
    return this.http.post<any>(`${environment.apiUrl}/accounts/refresh-token`, {});
  }
}
