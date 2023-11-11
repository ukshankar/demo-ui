import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { TableExpandableComponent } from '../table-expandable/table-expandable.component';
import { TreeExampleComponent } from '../tree-example/tree-example.component';
import { SimpleTableComponent } from '../simple-table/simple-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-page-tab',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatSelectModule, MatFormFieldModule, FlexLayoutModule, CommonModule,MatTabsModule, TableExpandableComponent, TreeExampleComponent,SimpleTableComponent,MatButtonModule,MatIconModule, ],
  templateUrl: './page-tab.component.html',
  styleUrl: './page-tab.component.css'
})
export class PageTabComponent {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
