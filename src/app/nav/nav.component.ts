import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../loggerUsers/signin/login.component';
// import { AutofillMonitor } from '@angular/cdk/text-field';
// import '../../../node_modules/materialize-css/dist/js/materialize.js';
import { MatSidenav } from '@angular/material/sidenav';
import { LoggerService } from '../loggerService/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.style.scss']
})
export class NavComponent implements OnInit {
  SideNavIsOpen = false;
  @ViewChild('sidenav')
  sidenav: MatSidenav;

  constructor(
    private dialog: MatDialog,
    public logger: LoggerService,
    private router: Router
  ) {}

  ngOnInit() {}

  /**
   * show modal login component
   */
  modalLogin() {
    const dialog = this.dialog.open(LoginComponent, {
      width: 'auto',
      height: 'auto'
    });
  }

  /**
   * logOut and redirect to home component
   */
  logOut() {
    this.logger.loggedUser = false;
    this.router.navigate(['/home']);
    // TODO: pogać z Mackiem o wylogowaniu z serwera;
  }
}
