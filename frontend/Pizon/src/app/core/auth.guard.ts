import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (!authService.getToken()) {
    router.navigate(['/accounts/authenticate']);  
    return false;  // Redirects unauthorized users
  }

  return true; // Allows access if user is authenticated
};
