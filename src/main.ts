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
   <!-- test case to use set disabled in other cases -->
    <dx-button
      withPermissions
      text="Disabled by something else and has permission true"
      (onClick)="alert('clicked')"
      [disabled]="secondButtonDisabled"
      [hasPermission]="true"
    ></dx-button>
    <dx-button
      withPermissions
      [text]="'LocalStateDisabled: ' + thirdButtonDisabled + ' by something else and has permission false'"
      (onClick)="alert('clicked')"
      [disabled]="thirdButtonDisabled"
      [hasPermission]="false"
    ></dx-button>
    <!-- test case to with directive that overrides hover -->
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
    <!-- controls -->
    <dx-button
      text="click to enable second button"
      (onClick)="secondButtonDisabled = false"
    ></dx-button>
    <dx-button
      text="click to enable third button"
      (onClick)="thirdButtonDisabled = false"
    ></dx-button>
  `,
  styles: [
    'dx-button { margin-bottom: 20px; }'
  ]
})
export class App {
  name = 'Angular';
  secondButtonDisabled = true;
  thirdButtonDisabled = true;
  protected readonly alert = alert;
}

bootstrapApplication(App);
