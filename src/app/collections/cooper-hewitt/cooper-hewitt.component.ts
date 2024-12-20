import { Component, Input } from '@angular/core';
import { CooperHewittService } from '../../services/cooper-hewitt.service';
import { cooperhewittdepartment } from '../../../shared.types';
import { FormsModule } from '@angular/forms';
import {Listbox, ListboxModule} from 'primeng/listbox';
import { ListItemsComponent } from './list-items/list-items.component';

// type department = {id: string, name: string, count_objects: string}[];

@Component({
  selector: 'app-cooper-hewitt',
  standalone: true,
  imports: [FormsModule, ListboxModule, ListItemsComponent],
  templateUrl: './cooper-hewitt.component.html',
  styleUrl: './cooper-hewitt.component.scss',
})
export class CooperHewittComponent {
  // allItems: any = [];
  allDepartments: cooperhewittdepartment[] = [];
  @Input() allItems: any = [];
  selectedDepartment: cooperhewittdepartment = { id: "35347493", name: "Drawings, Prints, and Graphic Design", count_objects: "" };
  fetchComplete: boolean = false;
  
  constructor(private dataService: CooperHewittService) {}

  ngOnInit(): void {
    // // Fetch first page of all items
    // this.dataService.getAll(1, this.filterString).subscribe({
    //   next: (data) => {
    //     //console.log('JSON Data:', data);
    //     this.allItems = data;
    //     console.log(this.allItems);
    //   },
    //   error: (error) => {
    //     console.error('Error fetching JSON data:', error);
    //   },
    // });

    // Fetch first page of departments
    this.dataService.getDepartments(1).subscribe({
      next: (data) => {
        //console.log('JSON Data:', data);
        this.allDepartments = data.departments;
        console.log(this.allDepartments);
        this.fetchComplete = true;
      },
      error: (error) => {
        console.error('Error fetching JSON data:', error);
      },
    });
  }

}
