import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignupComponent } from '../loggerUsers/signup/signup.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.style.scss']
})
export class HeroComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  modalSignUp() {
    const dialog = this.dialog.open(SignupComponent, {
      width: 'auto',
      height: 'auto'
    });
  }
}
