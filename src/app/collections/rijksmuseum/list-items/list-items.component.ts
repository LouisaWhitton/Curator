import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { RijksmuseumService } from '../../../services/rijksmuseum.service';
import {PaginatorModule} from 'primeng/paginator';
import { mycollectionitem } from '../../../../shared.types';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-rijksmuseum-list-items',
  standalone: true,
  imports: [PaginatorModule, Button],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss'
})
export class ListItemsComponent {
  @Input() allItems: any = [];
  @Output() allItemsChange = new EventEmitter<any[]>();
  @Input() searchString: string = "";
  pageNumber: number = 1;
  totalPages: number = 0;
  myCollection: any = [];

  filterString: string = "";
  infoString: string = "";

  constructor(private dataService: RijksmuseumService) {}

  ngOnInit(): void {
    let mycol: string = JSON.parse(String(localStorage.getItem('myCollection')));
  }

  ngOnChanges(): void {
    this.callFromApi();
  }

  callFromApi(): void {
    this.filterString = this.searchString.replace(/\s/g, "%20AND%20");

    // Fetch first page of all items
    this.dataService.getAll(this.pageNumber, this.filterString).subscribe({
      next: (data) => {
        this.allItems = data;
        console.log(this.allItems);
        this.totalPages = Math.ceil(this.allItems.count/10);
        this.allItemsChange.emit(this.allItems);
        this.infoString = this.allItems.count === 0 ? `No items found ` : `Displaying items matching '${this.searchString.replace(/\s/g, "' '")}'`
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
      collection_name: "Rijksmuseum",
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
