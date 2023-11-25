import {Directive} from "@angular/core";

@Directive({
  selector: 'dx-button1',
  standalone: true,
  host: {
    // '(mouseover)': 'onOver()',
    '(click)': 'onClick()'
  }
})
export class ButtonDirective {
  // constructor(private el: ElementRef) {}
  //
  // @HostListener('mouseover', ['$event'])
  // onMouseOver(event: Event) {
  //   // Check if the button or element is disabled
  //   const isDisabled = this.el.nativeElement.hasAttribute('disabled');
  //
  //   // If disabled, trigger your desired behavior
  //   if (isDisabled) {
  //     console.log('Mouseover event on a disabled button');
  //     // Add your custom logic here
  //   }
  // }

  ngOnInit() {
    console.log('ButtonDirective initialized!');
  }

  onOver() {
    console.log('hover');
  }
  onClick() {
    console.log('ButtonDirective clicked!');
  }
}