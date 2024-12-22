import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { RijksmuseumService } from '../../../services/rijksmuseum.service';

@Component({
  selector: 'app-rijksmuseum-list-items',
  standalone: true,
  imports: [],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss'
})
export class ListItemsComponent {
  @Input() allItems: any = [];
  @Output() allItemsChange = new EventEmitter<any[]>();
  @Input() searchString: string = "";
  @Input() pageNumber: string = "0";
  @Output() pageNumberChange = new EventEmitter<string>();
  totalPages: number = 0;

  filterString: string = "";
  infoString: string = "";
  // {{departmentName}} containing '{{searchString}}'"

  constructor(private dataService: RijksmuseumService) {}

  ngOnChanges(): void {
    this.filterString = this.searchString.replace(/\s/g, "%20AND%20");

    // Fetch first page of all items
    this.dataService.getAll(1, this.filterString).subscribe({
      next: (data) => {
        //console.log('JSON Data:', data);
        this.allItems = data;
        console.log(this.allItems);
        // console.log(this.filterString)
        this.totalPages = Math.ceil(this.allItems.count/10);
        this.allItemsChange.emit(this.allItems);
        this.infoString = this.allItems.count === 0 ? `No items found ` : `Displaying page ${String(this.pageNumber)} of ${this.totalPages} (total: ${this.allItems.count} items) containing '${this.searchString.replace(/\s/g, "' ")}'`
      },
      error: (error) => {
        console.error('Error fetching JSON data:', error);
      },
    });
   
  }
}
