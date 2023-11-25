import {Component, ElementRef, Input, ViewChild} from "@angular/core";
import {DxTooltipComponent, DxTooltipModule} from "devextreme-angular";
import {NgIf} from "@angular/common";
import { uniqueId } from 'lodash';

@Component({
  selector: 'permission-tooltip-container',
  template: `
      <div #containerDiv [id]="containerId">
          <ng-content></ng-content>
      </div>
      <dx-tooltip
        *ngIf="isTooltipVisible"
        #tooltip  
        [target]="'#' + containerId"
        showEvent="mouseenter" 
        hideEvent="mouseleave" 
        position="bottom" 
        [hideOnOutsideClick]="false"
      >
        <div [innerHTML]="'tooltip content'"></div>
      </dx-tooltip>
  `,
  imports: [
    DxTooltipModule,
    NgIf
  ],
  standalone: true,
  host: {
    display: 'block'
  }
})
export class PermissionTooltipContainerComponent {
  @ViewChild('containerDiv', { static: false }) containerElement: ElementRef;
  @ViewChild('tooltip', { static: false }) tooltip: DxTooltipComponent;
  @Input() isTooltipVisible = false;
  containerId = uniqueId('permission-tooltip-container-');
}