import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Fieldset } from 'primeng/fieldset';
import { FloatLabel } from 'primeng/floatlabel';
import { Button } from 'primeng/button';
import { ListItemsComponent } from './list-items/list-items.component';
import {RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-my-collection',
  standalone: true,
  imports: [FormsModule, ListItemsComponent, ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './my-collection.component.html',
  styleUrl: './my-collection.component.scss'
})
export class MyCollectionComponent {

}
