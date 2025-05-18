import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User | null>(
      JSON.parse(localStorage.getItem('currentUser') || 'null')
    );
    this.currentUser = this.currentUserSubject.asObservable();

    // Check if there's a stored token or other auth state
    const hasToken = localStorage.getItem('auth_token');
    this.isAuthenticatedSubject.next(!!hasToken);
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<User>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('auth_token', 'dummy_token');
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
        return user;
      }));
  }

  register(user: {email: string, password: string, firstName: string, lastName: string}) {
    return this.http.post(`${environment.apiUrl}/auth/register`, user);
  }

  verifyEmail(token: string) {
    return this.http.post(`${environment.apiUrl}/auth/verify-email`, { token });
  }

  forgotPassword(email: string) {
    return this.http.post(`${environment.apiUrl}/auth/forgot-password`, { email });
  }

  resetPassword(token: string, password: string) {
    return this.http.post(`${environment.apiUrl}/auth/reset-password`, { token, password });
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('auth_token');
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  updateProfile(id: number, changes: Partial<User>) {
    return this.http.put<User>(`${environment.apiUrl}/users/${id}`, changes)
      .pipe(map(user => {
        if (user) {
          const updatedUser = { ...this.currentUserValue, ...user } as User;
          localStorage.setItem('currentUser', JSON.stringify(updatedUser));
          this.currentUserSubject.next(updatedUser);
        }
        return user;
      }));
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
