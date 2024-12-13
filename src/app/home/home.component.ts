import { Component } from '@angular/core';
import { CooperHewittService } from '../services/cooper-hewitt.service';
// import { CooperHewittComponent } from '../collections/cooper-hewitt/cooper-hewitt.component';
// import { JsonArray, JsonMap } from '../../types';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private doTestCall: boolean = true;
  allItems: any = [];
  constructor(private dataService: CooperHewittService) {}

  ngOnInit(): void {
    if (this.doTestCall) {
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

    } else {
      console.log('skipping test import');
    }
  }





}