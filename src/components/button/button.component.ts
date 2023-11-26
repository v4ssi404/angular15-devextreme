import {Component, Input} from '@angular/core';
import {DxButtonModule} from "devextreme-angular";
import {ButtonDirective} from "../../directives/button.directive";

@Component({
  standalone: true,
  selector: 'app-button',
  template: `
      <!-- has permission is a boolean value returned by a pipe -->
      <dx-button
        text="Click me"
        [hasPermission]="false"
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