import { Component } from '@angular/core';
import { CooperHewittService } from '../../services/cooper-hewitt.service';

@Component({
  selector: 'app-display-collection',
  imports: [],
  templateUrl: './display-collection.component.html',
  styleUrl: './display-collection.component.scss'
})
export class DisplayCollectionComponent {
  allItems: any = [];
  constructor(private dataService: CooperHewittService) {}

  ngOnInit(): void {
      // Fetch JSON data
      this.dataService.getAll().subscribe({
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
