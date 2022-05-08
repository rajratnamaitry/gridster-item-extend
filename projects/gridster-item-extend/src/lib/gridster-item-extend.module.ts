import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { GridsterItemExtendComponent } from './gridster-item-extend.component';

@NgModule({
  declarations: [
    GridsterItemExtendComponent
  ],
  imports: [
    GridsterModule
  ],
  exports: [
    GridsterItemExtendComponent
  ]
})
export class GridsterItemExtendModule { }
