import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { LoggerService } from '../../loggerService/logger.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Post, Body } from '../../models/pesron';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.style.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form')
  form: NgForm;
  loginMess: FormGroup;
 // errors = null;
  errorEmail = false;
  errorPass = false;
  hide = true;
  constructor(
    private logerServices: LoggerService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
   // console.log(this.loginMess);

    this.loginMess = this.initLoginForm();
    // console.log(this.logerServices.stateRouterUrl.url);
  }
  onSubmit(mess) {
    //   console.log('mess');
    //   console.log(mess);
    //   console.log('this.form');
    //  console.log(this.form);
// TODO: hash pass
    this.logerServices
      .postLoginUser(mess.value.emailFormControl, mess.value.paswordFormControl)
      .subscribe(a => {
      //  console.log(a);
        if (a['loginStatus'] === 'OK') {
          this.errorEmail = false;
          this.errorPass = false;
          this.logerServices.loggedUser = true;
          if (typeof this.logerServices.stateRouterUrl !== 'undefined') {
            // console.log('REDIDERCT');
            this.router.navigate([this.logerServices.stateRouterUrl.url]);
          }

          // (this.auth.stateRouter.url) ? (this.router.navigate(this.auth.stateRouter.url)):(null)
          this.dialog.closeAll();
        }
        if (a['loginStatus'] === 'INVALID_EMAIL') {
          this.errorEmail = true;
          this.logerServices.loggedUser = false;
        }
        if (a['loginStatus'] === 'INVALID_PASSWORD') {
          this.errorEmail = false;
          this.errorPass = true;
          this.logerServices.loggedUser = false;
        }
      });
  }

  singUp() {}

  /**
   * init Form Grup to validate
   */
  initLoginForm() {
    return new FormGroup({
      emailFormControl: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      paswordFormControl: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9$@$!%*?&]{5,}$')

        //  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        // minimum 8 znaków jeden Duża litera, jedna cyfra, jednen znak specjalny
      ])
    });
  }
}
