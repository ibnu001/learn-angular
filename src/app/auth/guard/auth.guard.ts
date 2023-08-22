import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)


  console.log('AUTH GUARD STATE: ', state)
  console.log('AUTH GUARD ROUTE: ', route)

  if (sessionStorage.getItem('token')) {
    return true
  } else {
    router.navigateByUrl('/')
    return false
  }
};
