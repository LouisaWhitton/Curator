import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { CooperHewittService } from '../../../services/cooper-hewitt.service';
import { mycollectionitem } from '../../../../shared.types';
import { Button } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-cooper-hewitt-list-items',
  standalone: true,
  imports: [Button, PaginatorModule],
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
  pageNumber: number = 1;
  totalPages: number = 0;
  myCollection: any = [];

  constructor(private dataService: CooperHewittService) {}

  ngOnChanges(): void {
    this.callFromApi();
  }

  callFromApi(): void {
    if(this.searchString!=""){
      this.filterString = `department_id=${this.departmentId}&query=${this.searchString}`;
    } else {
      this.filterString = `department_id=${this.departmentId}`;
    }

    // Fetch first page of all items
    this.dataService.getAll(this.pageNumber, this.filterString).subscribe({
      next: (data) => {
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

  onPageChange(props: any): void {
    this.pageNumber=props.page + 1;
    this.callFromApi();
  }

  addToMyCollection(origin_id: string, title: string, originator: string, imageUrl: string, originUrl: string ): void{
    let itemToAdd: mycollectionitem = {
      origin_id: origin_id,
      collection_name: "Cooper Hewitt",
      title: title,
      originator: originator,
      imageUrl: imageUrl,
      originUrl: originUrl
    }
    this.myCollection = JSON.parse(String(localStorage.getItem('myCollection')));
    this.myCollection.push(itemToAdd);
    localStorage.removeItem("myCollection");
    localStorage.setItem('myCollection', JSON.stringify(this.myCollection));
  }
}
