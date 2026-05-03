import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const superAdminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return localStorage && localStorage.getItem("login")
    ? localStorage.getItem("role") === 'Super Admin'
      ? true
      : inject(Router).navigate(['/user'])
    : inject(Router).navigate(['user/login']);
};
