import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import {PaginatorModule} from 'primeng/paginator';
import { mycollectionitem } from '../../../../shared.types';

@Component({
  selector: 'app-my-collection-list-items',
  standalone: true,
  imports: [PaginatorModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss'
})
export class ListItemsComponent {

  constructor() {}


  myCollection: any = [];

  ngOnInit(): void {
    this.myCollection = JSON.parse(String(localStorage.getItem('myCollection')));

    console.log(this.myCollection, "myCollection");
    // this.callFromApi();
    // this.filterString = this.searchString.replace(/\s/g, "%20AND%20");

    // // Fetch first page of all items
    // this.dataService.getAll(this.pageNumber, this.filterString).subscribe({
    //   next: (data) => {
    //     //console.log('JSON Data:', data);
    //     this.allItems = data;
    //     console.log(this.allItems);
    //     // console.log(this.filterString)
    //     this.totalPages = Math.ceil(this.allItems.count/10);
    //     this.allItemsChange.emit(this.allItems);
    //     this.infoString = this.allItems.count === 0 ? `No items found ` : `Displaying page ${String(this.pageNumber)} of ${this.totalPages} (total: ${this.allItems.count} items) containing '${this.searchString.replace(/\s/g, "' ")}'`
    //   },
    //   error: (error) => {
    //     console.error('Error fetching JSON data:', error);
    //   },
    // });
  }

  // onPageChange(props: any): void {
  //   // alert(this.filterString);
  //   // alert(props.page);
  //   this.pageNumber=props.page + 1;
  //   this.callFromApi();
  // }

  
}
