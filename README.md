# GridsterItemExtend
  * src/app/app.module.ts
  ```
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      GridsterItemExtendModule,
      GridsterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  ```  
  * src/app/app.component.ts
  ```
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
  # HTML
  ```
  <gridster [options]="options">
    <gridster-item-extend [item]="item" *ngFor="let item of dashboard">
      <div>
        <h2>raj</h2>
      </div>
    </gridster-item-extend>
  </gridster>
  ```
