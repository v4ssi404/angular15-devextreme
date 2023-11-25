import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {ButtonComponent} from "./components/button/button.component";
import {ButtonDirective} from "./directives/button.directive";

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ButtonDirective],
  template: `
    <app-button></app-button>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
