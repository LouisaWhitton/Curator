import { Component, isDevMode } from '@angular/core';
import { CooperHewittService } from '../../services/cooper-hewitt.service';
import { Listbox } from 'primeng/listbox';
import { cooperhewittdepartment } from '../../../shared.types';

// type department = {id: string, name: string, count_objects: string}[];

@Component({
  selector: 'app-cooper-hewitt',
  standalone: true,
  imports: [],
  templateUrl: './cooper-hewitt.component.html',
  styleUrl: './cooper-hewitt.component.scss',
})
export class CooperHewittComponent {
  allItems: any = [];
  departments: cooperhewittdepartment[] = [];

  constructor(private dataService: CooperHewittService) {}

  ngOnInit(): void {
    // Fetch first page of all items
    this.dataService.getAll(1).subscribe({
      next: (data) => {
        //console.log('JSON Data:', data);
        this.allItems = data;
        console.log(this.allItems);
      },
      error: (error) => {
        console.error('Error fetching JSON data:', error);
      },
    });

    // Fetch first page of departments
    this.dataService.getDepartments(1).subscribe({
      next: (data) => {
        //console.log('JSON Data:', data);
        this.departments = data;
        console.log(this.departments);
      },
      error: (error) => {
        console.error('Error fetching JSON data:', error);
      },
    });
  }
}
