import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoggerService } from '../loggerService/logger.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../loggerUsers/signin/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private logger: LoggerService, private modal: MatDialog) {}
  stateRouter: RouterStateSnapshot;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    //  console.log(next);
    //  console.log(state);

    /**
     * from where user com (page)
     */

    this.logger.stateRouterUrl = state;

    /**
     * give access to page security in router
     */
    if (this.logger.loggedUser) {
      return true;
    }

    /**
     * no access to secutity pages in router open modal to login
     */
    this.modal.open(LoginComponent);
    return false;
  }
}
