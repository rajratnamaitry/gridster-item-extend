import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsterItemExtendComponent } from './gridster-item-extend.component';

describe('GridsterItemExtendComponent', () => {
  let component: GridsterItemExtendComponent;
  let fixture: ComponentFixture<GridsterItemExtendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridsterItemExtendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsterItemExtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
