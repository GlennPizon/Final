import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, finalize, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Account } from '../_models';

const baseUrl = `${environment.apiUrl}/accounts`;

@Injectable({ providedIn: 'root' })
export class AccountService {
    private accountSubject: BehaviorSubject<Account>;
    public account: Observable<Account>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.accountSubject = new BehaviorSubject<Account>(null);
        this.account = this.accountSubject.asObservable();
    }

    public get accountValue(): Account {
        return this.accountSubject.value;
    }

    setFakeAdmin(fakeAdmin: Account) {
        this.accountSubject.next(fakeAdmin);
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${baseUrl}/authenticate`, { email, password }, { withCredentials: true })
            .pipe(
                map(account => {
                    // store account details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('account', JSON.stringify(account));
                    this.accountSubject.next(account);
                    this.startRefreshTokenTimer();
                    return account;
                }),
                catchError(error => {
                    console.error('Login error:', error);
                    return throwError(() => error.error?.message || 'Login failed. Please check your credentials.');
                })
            );
    }

    logout() {
        // revoke token, stop refresh timer, remove account from local storage and redirect to login page
        this.http.post<any>(`${baseUrl}/revoke-token`, {}, { withCredentials: true }).subscribe();
        this.stopRefreshTokenTimer();
        localStorage.removeItem('account');
        this.accountSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    refreshToken() {
        return this.http.post<any>(`${baseUrl}/refresh-token`, {}, { withCredentials: true })
            .pipe(
                map(account => {
                    this.accountSubject.next(account);
                    this.startRefreshTokenTimer();
                    return account;
                }),
                catchError(error => {
                    console.error('Token refresh error:', error);
                    this.logout();
                    return throwError(() => error.error?.message || 'Token refresh failed');
                })
            );
    }

    register(account: Account) {
        return this.http.post(`${baseUrl}/register`, account);
    }

    verifyEmail(token: string) {
        return this.http.post(`${baseUrl}/verify-email`, { token });
    }
    
    forgotPassword(email: string) {
        return this.http.post(`${baseUrl}/forgot-password`, { email });
    }
    
    validateResetToken(token: string) {
        return this.http.post(`${baseUrl}/validate-reset-token`, { token });
    }
    
    resetPassword(token: string, password: string, confirmPassword: string) {
        return this.http.post(`${baseUrl}/reset-password`, { token, password, confirmPassword });
    }

    getAll() {
        return this.http.get<Account[]>(baseUrl);
    }

    getById(id: string) {
        return this.http.get<Account>(`${baseUrl}/${id}`);
    }
    
    create(params) {
        return this.http.post(baseUrl, params);
    }
    
    update(id, params) {
        return this.http.put(`${baseUrl}/${id}`, params)
            .pipe(map((account: any) => {
                // update the current account if it was updated
                if (account.id === this.accountValue.id) {
                    // publish updated account to subscribers
                    account = { ...this.accountValue, ...account };
                    this.accountSubject.next(account);
                }
                return account;
            }));
    }
    
    delete(id: string) {
        return this.http.delete(`${baseUrl}/${id}`)
            .pipe(finalize(() => {
                // auto logout if the logged in account was deleted
                if (this.accountValue && id === this.accountValue.id){
                    this.logout();
                }
            }));
    }
    

    // helper methods

    private refreshTokenTimeout;

    private startRefreshTokenTimer() {
        // parse json object from base64 encoded jwt token
        if (this.accountValue?.token) {
            try {
                const jwtToken = JSON.parse(atob(this.accountValue.token.split('.')[1]));
                if (jwtToken && jwtToken.exp) {
                    // set a timeout to refresh the token a minute before it expires
                    const expires = new Date(jwtToken.exp * 1000);
                    const timeout = expires.getTime() - Date.now() - (60 * 1000);
                    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
                } else {
                    console.error('Invalid JWT token or missing expiration time.');
                    this.logout();
                }
            } catch (error) {
                console.error('Error parsing JWT token:', error);
                this.logout();
            }
        }
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}
