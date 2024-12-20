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
  filterString: string = "";

  constructor(private dataService: CooperHewittService) {}

  ngOnChanges(): void {
    let dateTime = new Date();
    this.filterString = `department_id=${this.departmentId}`;
    alert("fetching now " + dateTime.toString() + " " + this.departmentId);
    // Fetch first page of all items
    this.dataService.getAll(1, this.filterString).subscribe({
      next: (data) => {
        //console.log('JSON Data:', data);
        this.allItems = data;
        console.log(this.allItems);
        console.log(this.filterString)
        this.allItemsChange.emit(this.allItems);
        let dateTime = new Date();
        alert("emitting now " + dateTime.toString());
      },
      error: (error) => {
        console.error('Error fetching JSON data:', error);
      },
    });
   
  }
}
