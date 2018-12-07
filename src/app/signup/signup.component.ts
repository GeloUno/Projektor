import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.style.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('form')
  form: NgForm;
  signUpMess: FormGroup;
  // TODO: hash pass
  // TODO: hash pass
  errorEmail = false;
  errorPass = false;
  hide = true;
  hideRepeat = true;
  equalPass;

  constructor() {}

  ngOnInit() {
    this.signUpMess = this.initSignUpMess();
    this.signUpMess.controls['paswordFormControl'].valueChanges.subscribe(a => {
      this.signUpMess.controls[
        'paswordFormControlRepeat'
      ].updateValueAndValidity();
    });
    //  console.log(this.signUpMess);
  }
  initSignUpMess() {
    return new FormGroup({
      emailFormControl: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      paswordFormControl: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9$@$!%*?&]{5,}$')
      ]),
      paswordFormControlRepeat: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9$@$!%*?&]{5,}$'),
        this.checkPassworRepet
      ]),
      indexId: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{5,}$')
      ])
    });
  }

  onSubmit(form: NgForm) {
    // TODO: send mess to server and hash pass
    return null;
  }

  checkPassworRepet(control: FormControl): ValidationErrors {
    if (control && control.value !== null) {
      if (control.parent !== null && control.parent !== undefined) {
        if (
          control.parent.controls['paswordFormControl'].value !== null &&
          control.parent.controls['paswordFormControlRepeat'].value !== null
        ) {
          if (
            control.parent.controls['paswordFormControl'].value ===
            control.parent.controls['paswordFormControlRepeat'].value
          ) {
            //   console.log(control.parent.controls);

            return null;
          } else {
            return { equalPass: false };
          }
        }
      }
      console.log(control.parent.controls['paswordFormControlRepeat']);
    }
  }
}
