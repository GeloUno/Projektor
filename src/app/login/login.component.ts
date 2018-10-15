import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { LoggerService } from '../logger/logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.style.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form')
  form: NgForm;
  loginMess: FormGroup;
  error = null;
  hide = true;
  constructor(private logerServices: LoggerService) {}

  ngOnInit() {
    this.loginMess = this.initLoginForm();
  }
  onSubmit(mess) {
    this.logerServices.postLoginUser('1', '2').subscribe(a => {
      console.log(a);
    });
  }
  singUp() {}

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