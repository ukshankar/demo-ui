import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExpandableComponent } from './table-expandable.component';

describe('TableExpandableComponent', () => {
  let component: TableExpandableComponent;
  let fixture: ComponentFixture<TableExpandableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableExpandableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
