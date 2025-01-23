import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { ArticService } from '../../../services/artic.service';
import { mycollectionitem } from '../../../../shared.types';
import { Button } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-artic-list-items',
  standalone: true,
  imports: [Button, PaginatorModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss'
})
export class ListItemsComponent {
  @Input() allItems: any = [];
  @Output() allItemsChange = new EventEmitter<any[]>();
  @Input() artwork_type_id: string = "1";
  @Input() artwork_type: string = "Picture";
  @Input() searchString: string = "";
  filterString: string = "";
  infoString: string = "";
  pageNumber: number = 1;
  totalPages: number = 0;
  total_count: number = 0;
  myCollection: any = [];
  itemDetails: any[] = [];

  constructor(private dataService: ArticService) {}

  ngOnChanges(): void {
    this.callFromApi();
  }

  callFromApi(): void {
    if(this.searchString!=""){
      this.filterString = `&limit=6&q=${this.searchString}&query%5Bterm%5D%5Bartwork_type_id%5D=${this.artwork_type_id}`;
    } else {
      this.filterString = `&limit=6&query%5Bterm%5D%5Bartwork_type_id%5D=${this.artwork_type_id}`;
    }

    this.itemDetails = [];

    // Fetch first page of all items
    this.dataService.getAll(this.pageNumber, this.filterString).subscribe({
      next: (data) => {
        this.allItems = data;
        this.allItems.data.map((e:any) => {
          this.dataService.getDetail(e.id).subscribe({
            next: (details) => {
              // console.log(details, "<<<details");
              e.artist_title = details.data.artist_title;
              e.image_id = details.data.image_id;
              e.image_url = `${process.env['ARTIC_IMAGES_URL']}${e.image_id}/full/300,/0/default.jpg`;
              e.url = `https://www.artic.edu`;
            }
          })
      });
        console.log(this.allItems);
        this.total_count = this.allItems.pagination.total;
        this.allItemsChange.emit(this.allItems);
            this.infoString = (this.allItems.pagination.total === 0 ? `No items found ` : this.allItems.pagination.current_page != this.allItems.pagination.total_pages ? `Displaying page ${this.allItems.pagination.current_page} of ${this.allItems.pagination.total_pages} (total: ${this.allItems.pagination.total} items)` : ( this.allItems.pagination.total === 1 ? `Displaying ${this.allItems.pagination.total} item` : `Displaying ${this.allItems.pagination.total} items`))
      + ` of type "${this.artwork_type}"`
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

  addToMyCollection(origin_id: string, title: string, originator: string, imageUrl: string, originUrl: string, item: any ): void{
    let itemToAdd: mycollectionitem = {
      origin_id: origin_id,
      collection_name: "Art Institute of Chicago",
      title: title,
      originator: originator,
      imageUrl: imageUrl,
      originUrl: originUrl
    }
    this.myCollection = JSON.parse(String(localStorage.getItem('myCollection')));
    this.myCollection.push(itemToAdd);
    localStorage.removeItem("myCollection");
    localStorage.setItem('myCollection', JSON.stringify(this.myCollection));
    item.is_liked = true;
  }
}
