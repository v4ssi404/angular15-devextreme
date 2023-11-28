import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  ViewContainerRef
} from "@angular/core";
import {
  PermissionTooltipContainerComponent
} from "../components/permission-tooltip-container/permission-tooltip-container.component";
import {DxButtonComponent} from "devextreme-angular";

@Directive({
  selector: 'dx-button[withPermissions]',
  standalone: true,
})
export class ButtonDirective implements AfterViewInit, OnChanges {
  @Input() hasPermission = false;
  @Input() disabled = false;
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
      this.disableIfHasNoPermissions();
      containerDiv.nativeElement.appendChild(this.el.nativeElement);
    });

    this.ref.detectChanges();
  }

  ngOnChanges() {
    this.disableIfHasNoPermissions();
  }

  private disableIfHasNoPermissions(){
    if (!this.hasPermission) {
      this.dxButton.instance.option({
        disabled: true,
      });
    }
  }
}