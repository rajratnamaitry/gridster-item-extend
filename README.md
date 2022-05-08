# gridster-item-extend


## Install

`npm i gridster-item-extend`

  * src/app/app.module.ts
  ```typescript
  @NgModule({
    imports: [
      GridsterItemExtendModule,
      GridsterModule
    ]
    ...
  })
  export class AppModule { }
  ```  
  * src/app/app.component.ts
  ```typescript
  import { GridsterItemExtendComponent } from 'gridster-item-extend';
  @ViewChildren(GridsterItemExtendComponent) gridsterItem : QueryList<GridsterItemExtendComponent>;
  
  loadGridsterItem(){
    // child node list 
    this.gridsterItem.forEach(e=> {
      // call method to load gridster item
      e.loadCurrentGridsterItem()
    })
  }
  ```
## Browser support

What Angular supports [here](https://github.com/angular/angular)

## How to use
  ```html
  <gridster [options]="options">
    <gridster-item-extend [item]="item" *ngFor="let item of dashboard">
      <div>
        <h2>raj</h2>
      </div>
    </gridster-item-extend>
  </gridster>
  ```

### License

The MIT License

Copyright (c) 2022 rajratna maitry