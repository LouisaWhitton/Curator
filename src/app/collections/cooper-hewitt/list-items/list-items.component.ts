import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { CooperHewittService } from '../../../services/cooper-hewitt.service';
import { cooperhewittdepartment } from '../../../../shared.types';

@Component({
  selector: 'app-cooper-hewitt-list-items',
  standalone: true,
  imports: [],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss'
})
export class ListItemsComponent {
  @Input() allItems: any = [];
  @Output() allItemsChange = new EventEmitter<any[]>();
  @Input() departmentId: string = "35347493";
  @Input() departmentName: string = "";
  @Input() searchString: string = "";
  filterString: string = "";
  infoString: string = "";
  // {{departmentName}} containing '{{searchString}}'"

  constructor(private dataService: CooperHewittService) {}

  ngOnChanges(): void {
    if(this.searchString!=""){
      this.filterString = `department_id=${this.departmentId}&query=${this.searchString}`;
    } else {
      this.filterString = `department_id=${this.departmentId}`;
    }

    // Fetch first page of all items
    this.dataService.getAll(1, this.filterString).subscribe({
      next: (data) => {
        //console.log('JSON Data:', data);
        this.allItems = data;
        console.log(this.allItems);
        console.log(this.filterString)
        this.allItemsChange.emit(this.allItems);
            this.infoString = (this.allItems.total === 0 ? `No items found ` : this.allItems.page != this.allItems.pages ? `Displaying page ${this.allItems.page} of ${this.allItems.pages} (total: ${this.allItems.total} items)` : ( this.allItems.total === 1 ? `Displaying ${this.allItems.total} item` : `Displaying ${this.allItems.total} items`))
      + ` for ${this.departmentName}`
      + ( this.searchString !== "" ? ` containing '${this.searchString}'` : ``);
      },
      error: (error) => {
        console.error('Error fetching JSON data:', error);
      },
    });
   
  }
}
