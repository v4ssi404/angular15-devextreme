import {AfterViewInit, Directive, Input} from "@angular/core";
import {DxButtonComponent} from "devextreme-angular";

@Directive({
  selector: 'dx-button[noWrapper]',
  standalone: true,
  host: {
    '(mouseover)': 'onOver()',
  }
})
export class ButtonNoWrapperDirective implements AfterViewInit {
  @Input() hasPermission = false;
  constructor(
    private dxButton: DxButtonComponent,
  ) {}

  ngAfterViewInit() {
    var element = this.dxButton.instance.element();
    console.log(element);
    console.log(element.id);
    if (!this.hasPermission) {
      this.dxButton.instance.option({
        disabled: true,
      });
    }
    element.addEventListener('mouseover', this.onOver);
  }

  onOver() {
    console.log('hover');
  }
}