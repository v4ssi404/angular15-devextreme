import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {ButtonDirective} from "./directives/button.directive";
import {DxButtonModule} from "devextreme-angular";
import {ButtonNoWrapperDirective} from "./directives/button-no-wrapper.directive";

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, DxButtonModule, ButtonDirective, ButtonNoWrapperDirective],
  template: `
    <!-- has permission is a boolean value returned by a pipe -->
    <dx-button
      withPermissions
      text="Click me 1"
      [hasPermission]="false"
    ></dx-button>
    <dx-button
      withPermissions
      text="Click me 2"
      [hasPermission]="false"
    ></dx-button>
    <dx-button
      withPermissions
      text="button that has permission but disabled for other reasons"
      [hasPermission]="true"
      [disabled]="true"
    ></dx-button>
    <dx-button
      noWrapper
      id="button-without-wrapper1"
      text="button without wrapper with id"
      [hasPermission]="false"
    ></dx-button>
    <dx-button
      noWrapper
      text="button without wrapper without id"
      [hasPermission]="false"
    ></dx-button>
  `,
  styles: [
    'dx-button { margin-bottom: 20px; }'
  ]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
