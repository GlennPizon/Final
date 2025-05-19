import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AccountService } from '../_services';
import { Role } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const account = this.accountService.accountValue;

    if (!account) {
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    // Ensure correct property access for 'roles'
    const requiredRoles = route.data['roles']; 
    if (requiredRoles && !requiredRoles.includes(account.role)) {
        this.router.navigate(['/']);
        return false;
    }

    return true;
}
}
