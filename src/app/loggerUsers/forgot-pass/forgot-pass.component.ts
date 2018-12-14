import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoggerService } from 'src/app/loggerService/logger.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.style.scss']
})
export class ForgotPassComponent implements OnInit {
  @ViewChild('form')
  form: NgForm;
  forgotPassMessage: FormGroup;
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
    this.forgotPassMessage = this.initForgotPassFormValidators();
  }
  initForgotPassFormValidators() {
    return new FormGroup({
      emailFormControl: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      indexIdFormControl: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[0-9]{5,}$')
      ])
    });
  }
  onSubmit(mess) {}
}
