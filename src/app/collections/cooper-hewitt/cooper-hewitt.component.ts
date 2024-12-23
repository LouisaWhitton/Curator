import { Component, Input } from '@angular/core';
import { CooperHewittService } from '../../services/cooper-hewitt.service';
import { cooperhewittdepartment, mycollectionitem } from '../../../shared.types';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ListboxModule} from 'primeng/listbox';
import { Fieldset } from 'primeng/fieldset';
import { FloatLabel } from 'primeng/floatlabel';
import { Button } from 'primeng/button';
import { ListItemsComponent } from './list-items/list-items.component';

// type department = {id: string, name: string, count_objects: string}[];

@Component({
  selector: 'app-cooper-hewitt',
  standalone: true,
  imports: [Button, Fieldset, FloatLabel, FormsModule, ListboxModule, ListItemsComponent, ReactiveFormsModule],
  templateUrl: './cooper-hewitt.component.html',
  styleUrl: './cooper-hewitt.component.scss',
})
export class CooperHewittComponent {
  allDepartments: cooperhewittdepartment[] = [];
  @Input() allItems: any = [];
  selectedDepartment: cooperhewittdepartment = { id: "35347493", name: "Drawings, Prints, and Graphic Design", count_objects: "" };
  searchString: string = "";
  inputSearchString: string = "";
  fetchComplete: boolean = false;
  
  constructor(private dataService: CooperHewittService) {}

  setSearchString(): void {
    this.searchString = this.inputSearchString;
  }

  ngOnInit(): void { 
    let mycol: string = JSON.parse(String(localStorage.getItem('myCollection')));
    // Fetch first page of departments
    this.dataService.getDepartments(1).subscribe({
      next: (data) => {
        this.allDepartments = data.departments;
        console.log(this.allDepartments);
        this.selectedDepartment = this.allDepartments[0];
        this.fetchComplete = true;
      },
      error: (error) => {
        console.error('Error fetching JSON data:', error);
      },
    });
  }
  
}
