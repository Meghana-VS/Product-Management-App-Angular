import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

class ProductDetailGuard{

  constructor(private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      const id = Number(route.paramMap.get('id'));
      if(isNaN(id) || id < 1){
        alert('Invalid Product id');
        this.router.navigate(['/products']);
        return false;
      }
    return true;
    }
}

export const productDetailGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean => {
  return inject(ProductDetailGuard).canActivate(route,state);
};
