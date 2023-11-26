import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from "@angular/core";
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
        <div [innerHTML]="'tooltip content - ' + containerId"></div>
      </dx-tooltip>
  `,
  imports: [
    DxTooltipModule,
    NgIf
  ],
  standalone: true,
})
export class PermissionTooltipContainerComponent implements AfterViewInit {
  @ViewChild('containerDiv', { static: false }) containerDiv: ElementRef;
  @ViewChild('tooltip', { static: false }) tooltip: DxTooltipComponent;
  @Input() isTooltipVisible = false;
  @Output() viewInit = new EventEmitter();
  containerId = uniqueId('permission-tooltip-container-');
  ngAfterViewInit() {
    this.viewInit.emit();
  }
}