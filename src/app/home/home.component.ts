import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { CooperHewittService } from '../services/cooper-hewitt.service';
// import { CooperHewittComponent } from '../collections/cooper-hewitt/cooper-hewitt.component';
// import { JsonArray, JsonMap } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  

}