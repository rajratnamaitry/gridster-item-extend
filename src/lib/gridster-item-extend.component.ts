import { Component, ElementRef, Inject, NgZone, OnInit, Renderer2 } from '@angular/core';
import { GridsterComponent, GridsterItemComponent } from 'angular-gridster2';

@Component({
  selector: 'gridster-item-extend',
  template: `<ng-content></ng-content>`,
  styles: [`:host{
    box-sizing: border-box;
    z-index: 1;
    position: absolute;
    overflow: hidden;
    transition: .3s;
    display: none;
    background:white;
    -webkit-user-select: text;
    user-select: text;
  }`]
})
export class GridsterItemExtendComponent extends GridsterItemComponent {

  constructor(
    @Inject(ElementRef)el: ElementRef, 
    gridster: GridsterComponent, 
    @Inject(Renderer2) renderer: Renderer2, 
    @Inject(NgZone) zone: NgZone){
    super(el,gridster,renderer,zone);
  }

  ngOnInit(): void {
    if(!this.gridster.options['customLoadItems']){
      this.loadCurrentGridsterItem();
    }
    // overide method
  }
  loadCurrentGridsterItem(): void{ 
    this.gridster.addItem(this);
  }
  getNewRow(newHeight): number {
    return (newHeight / this.gridster.curRowHeight) + this.gridster.$options.margin;
  }
}
