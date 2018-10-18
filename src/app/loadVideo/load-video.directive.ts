import {
  Directive,
  OnInit,
  AfterContentInit,
  AfterViewInit,
  ElementRef,
  Renderer2,
  HostListener
} from '@angular/core';
declare var alertTest;

@Directive({
  selector: '[appLoadVideo]'
})
export class LoadVideoDirective
  implements OnInit, AfterViewInit, AfterContentInit {
  constructor(private el: ElementRef, private render: Renderer2) {}
  ngOnInit(): void {}

  ngAfterContentInit() {
    // alertTest();
  }
  ngAfterViewInit() {
    console.log('Test Dyrektywy');
    console.log(this.el.nativeElement);
    // this.render.listen(,)
    const li = this.el;
    console.log(li);
    alertTest();
    alertTest();
  }
  // @HostListener('load')
  // load(eventDate: Event) {
  //   console.log(Event);
  //   alertTest();
  // }
}
