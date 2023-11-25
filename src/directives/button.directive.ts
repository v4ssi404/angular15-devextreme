import {AfterViewInit, ChangeDetectorRef, Directive, ElementRef, OnInit, ViewContainerRef} from "@angular/core";
import {
  PermissionTooltipContainerComponent
} from "../components/permission-tooltip-container/permission-tooltip-container.component";
import {DxButtonComponent} from "devextreme-angular";

@Directive({
  selector: 'dx-button',
  standalone: true,
})
export class ButtonDirective implements OnInit, AfterViewInit {
  constructor(
    private dxButton: DxButtonComponent,
    private viewContainerRef: ViewContainerRef,
    private ref: ChangeDetectorRef,
    private el: ElementRef,
  ) {}

  ngOnInit() {
    console.log('ButtonDirective initialized!');
  }

  ngAfterViewInit() {
    const componentRef = this.viewContainerRef.createComponent(PermissionTooltipContainerComponent);
    const containerEl = (componentRef.hostView as any).rootNodes[0].childNodes[0] as HTMLElement;
    componentRef.instance.isTooltipVisible = this.dxButton.instance.option('disabled');
    containerEl.appendChild(this.el.nativeElement);

    this.ref.detectChanges();
  }
}