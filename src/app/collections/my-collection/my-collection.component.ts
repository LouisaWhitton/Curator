import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Fieldset } from 'primeng/fieldset';
import { FloatLabel } from 'primeng/floatlabel';
import { Button } from 'primeng/button';
import { ListItemsComponent } from './list-items/list-items.component';

@Component({
  selector: 'app-my-collection',
  standalone: true,
  imports: [FormsModule, ListItemsComponent, ReactiveFormsModule],
  templateUrl: './my-collection.component.html',
  styleUrl: './my-collection.component.scss'
})
export class MyCollectionComponent {

}
