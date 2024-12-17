import { Component } from '@angular/core';
import { CooperHewittService } from '../../services/cooper-hewitt.service';

@Component({
  selector: 'app-cooper-hewitt',
  standalone: true,
  imports: [],
  templateUrl: './cooper-hewitt.component.html',
  styleUrl: './cooper-hewitt.component.scss'
})
export class CooperHewittComponent {
  allItems: any = [];
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

    }

  }
