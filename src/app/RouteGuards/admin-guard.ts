import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return localStorage && localStorage.getItem("login")
    ? localStorage.getItem("role") !== 'Buyer' 
      ? true
      : inject(Router).navigate(['/user'])
    : inject(Router).navigate(['user/login']);
};
