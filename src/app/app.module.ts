import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule
} from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './loggerUsers/signin/login.component';
import { SignupComponent } from './loggerUsers/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CourseComponent } from './course/course.component';
import { LoggerService } from './loggerService/logger.service';
import { HttpClientModule } from '@angular/common/http';
import { VideoComponent } from './video/video.component';
import { NoExistComponent } from './no-exist/no-exist.component';
import { TestsComponent } from './tests/tests.component';
import { AboutComponent } from './about/about.component';
import { ForgotPassComponent } from './loggerUsers/forgot-pass/forgot-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CourseComponent,
    VideoComponent,
    NoExistComponent,
    TestsComponent,
    AboutComponent,
    ForgotPassComponent
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
    FlexLayoutModule,
    MatSidenavModule,
    HttpClientModule
  ],
  exports: [MatButtonModule, MatIconModule, FlexLayoutModule],
  entryComponents: [LoginComponent, SignupComponent,ForgotPassComponent],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
