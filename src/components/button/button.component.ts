import {Component, Input} from '@angular/core';
import {DxButtonModule} from "devextreme-angular";
import {ButtonDirective} from "../../directives/button.directive";

@Component({
  standalone: true,
  selector: 'app-button',
  template: `
      <dx-button
        text="Click me"
        [disabled]="true"
      ></dx-button>
  `,
  imports: [
    DxButtonModule,
    ButtonDirective
  ]
})
export class ButtonComponent {
  @Input() permissions: boolean;

}