import { Component, Input } from '@angular/core';
import { ArticService } from '../../services/artic.service';
import { articArtType, mycollectionitem } from '../../../shared.types';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ListboxModule} from 'primeng/listbox';
import { Fieldset } from 'primeng/fieldset';
import { FloatLabel } from 'primeng/floatlabel';
import { Button } from 'primeng/button';
import { ListItemsComponent } from './list-items/list-items.component';
import {RouterOutlet, RouterLink} from '@angular/router';

// type department = {id: string, name: string, count_objects: string}[];

@Component({
  selector: 'app-artic',
  standalone: true,
  imports: [Button, Fieldset, FloatLabel, FormsModule, ListboxModule, ListItemsComponent, ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './artic.component.html',
  styleUrl: './artic.component.scss',
})
export class ArticComponent {
  allArtTypes: any = [];
  @Input() allItems: any = [];
  selectedArtType: any = { id: "1", title: "Painting" };
  searchString: string = "";
  inputSearchString: string = "";
  fetchComplete: boolean = false;
  
  constructor(private dataService: ArticService) {}

  setSearchString(): void {
    this.searchString = this.inputSearchString;
  }

  ngOnInit(): void { 
    let mycol: string = JSON.parse(String(localStorage.getItem('myCollection')));
    // Fetch artwork types
    this.dataService.getArtTypes().subscribe({
      next: (data) => {
        this.allArtTypes = data;
        this.selectedArtType = this.allArtTypes.data[0];
        this.fetchComplete = true;
      },
      error: (error) => {
        console.error('Error fetching JSON data:', error);
      },
    });
  }
  
}
