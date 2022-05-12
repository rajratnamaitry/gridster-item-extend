# gridster-item-extend
## Install

`npm i gridster-item-extend`

## How to use
# Module import Declaration
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
  # How to use in HTML files
  ```html
  <gridster [options]="options">
    <gridster-item-extend [item]="item" *ngFor="let item of dashboard">
      <div>
        <h2>raj</h2>
      </div>
    </gridster-item-extend>
  </gridster>
  ```
  * src/app/app.component.ts
  ```typescript
  import { GridsterItemExtendComponent } from 'gridster-item-extend';
  @ViewChildren(GridsterItemExtendComponent) gridstersItem : QueryList<GridsterItemExtendComponent>;

  ngOnInit(): void {
    this.options = {
      /* Default value : false;
      * If customLoadItems is not given then it will work as normal 
      * gridster-item component
      * 
      * If customLoadItems set to true then you can control loading of
      * gridster-item-extend component
      */
      customLoadItems: true,
      ....
    }
  }
  ngAfterViewInit(){
      this.loadGridsterItemAutoHeight();
  }
  loadGridsterItem(){
    // child node list 
    this.gridsterItems.forEach(item=> {
      // call method to load gridster item
      item.loadCurrentGridsterItem()
    })
  }
  // Use this function call in/after ngAfterViewInit life cycle
  loadGridsterItemAutoHeight(){
    this.gridsterItems.forEach(item=> {
      // Child element height;
      const height = item.el.querySelector('div').offsetHeight;
      // setNewRow function calculate new rows for current item
      item.setNewRow(height);
      item.loadCurrentGridsterItem();
    })
  }
  ```
## Browser support

What Angular supports [here](https://github.com/angular/angular)

### License

The MIT License

Copyright (c) 2022 rajratna maitry