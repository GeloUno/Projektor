import { Component, OnInit, AfterViewInit } from '@angular/core';
// import * as vs from './testApp.js';
// import '../jsf/testApp.js';
 declare var startVideo ;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.style.scss']
})
export class VideoComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    startVideo();
  }
}
