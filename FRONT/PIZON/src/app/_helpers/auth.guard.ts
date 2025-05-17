import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountService } from '../_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private accountService: AccountService) {}

  canActivate(): boolean {
    const user = this.accountService.userValue;
    if (user) return true;

    this.router.navigate(['/account/login']);
    return false;
  }
}
