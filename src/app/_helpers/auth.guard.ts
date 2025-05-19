import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AccountService } from '../_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard  {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const account = this.accountService.accountValue;
        console.log('Auth Guard - Current account:', account);
        console.log('Auth Guard - Route data:', route.data);
        
        if (account) {
            // check if route is restricted by role
            if (route.data.roles && !route.data.roles.includes(account.role)) {
                console.log('Auth Guard - Role check failed:', {
                    requiredRoles: route.data.roles,
                    userRole: account.role
                });
                // role not authorized so redirect to home page
                this.router.navigate(['/']);
                return false;
            }

            console.log('Auth Guard - Authorization successful');
            // authorized so return true
            return true;
        }

        console.log('Auth Guard - Not logged in, redirecting to login');
        // not logged in so redirect to login page with the return url 
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}