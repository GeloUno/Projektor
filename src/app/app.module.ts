import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    LayoutModule,
    FlexLayoutModule

  ],
  exports: [MatButtonModule, MatIconModule, FlexLayoutModule],
  entryComponents: [LoginComponent, SignupComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
