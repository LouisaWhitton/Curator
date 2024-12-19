import { Component, Input } from '@angular/core';
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
  allItems: any = [];
  @Input() departmentId: string = "35347493";
  filterString: string = `department_id=${this.departmentId}`

  constructor(private dataService: CooperHewittService) {}

  ngOnInit(): void {
    // Fetch first page of all items
    this.dataService.getAll(1, this.filterString).subscribe({
      next: (data) => {
        //console.log('JSON Data:', data);
        this.allItems = data;
        console.log(this.allItems);
      },
      error: (error) => {
        console.error('Error fetching JSON data:', error);
      },
    });
  }
}
