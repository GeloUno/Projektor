import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgForm,
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
  firstPass; // TODO: hash pass
  secondPass; // TODO: hash pass
  errorEmail = false;
  errorPass = false;
  hide = true;
  hideRepeat = true;
  equalPass;

  constructor() {}

  ngOnInit() {
    this.signUpMess = this.initSignUpMess();
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
    return null;
  }
  changeFirstPass(a: any) {
    console.log('Changes'), (this.firstPass = a.value.paswordFormControl);
    console.log(this.firstPass);
  }
  changeSecondPass(a: any) {
    console.log('Changes'), (this.secondPass = a.value.paswordFormControl);
    console.log(this.secondPass);
  }

  checkPassworRepet(a: FormControl): ValidationErrors {
    console.log(a);

    //    if (this.firstPass === this.secondPass)
    // {
    return { equalPass: true };
    //      } else {
    //   return { equalPass: false };
    // }
  }
}
