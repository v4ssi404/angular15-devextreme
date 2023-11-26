import {AfterViewInit, ChangeDetectorRef, Directive, ElementRef, Input, ViewContainerRef} from "@angular/core";
import {
  PermissionTooltipContainerComponent
} from "../components/permission-tooltip-container/permission-tooltip-container.component";
import {DxButtonComponent} from "devextreme-angular";

@Directive({
  selector: 'dx-button[withPermissions]', //withPermission attribute can be removed in real implementation
  standalone: true,
})
export class ButtonDirective implements AfterViewInit {
  @Input() hasPermission = false;
  constructor(
    private dxButton: DxButtonComponent,
    private viewContainerRef: ViewContainerRef,
    private ref: ChangeDetectorRef,
    private el: ElementRef,
  ) {}

  ngAfterViewInit() {
    const componentRef = this.viewContainerRef.createComponent(PermissionTooltipContainerComponent);
    componentRef.instance.isTooltipVisible = !this.hasPermission;

    componentRef.instance.viewInit.subscribe(() => {
      const containerDiv = componentRef.instance.containerDiv;
      if (!this.hasPermission) {
        this.dxButton.instance.option({
          disabled: true,
        });
      }
      containerDiv.nativeElement.appendChild(this.el.nativeElement);
    });

    this.ref.detectChanges();
  }
}