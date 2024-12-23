import { Component, Input, Output, EventEmitter } from '@angular/core';
import { mycollectionitem } from '../../../shared.types';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import {Listbox, ListboxModule} from 'primeng/listbox';
import { InputGroup } from 'primeng/inputgroup';
import { Fieldset } from 'primeng/fieldset';
import { FloatLabel } from 'primeng/floatlabel';
import { Fluid } from 'primeng/fluid';
import { Button } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { ListItemsComponent } from './list-items/list-items.component';

@Component({
  selector: 'app-my-collection',
  standalone: true,
  imports: [Button, Fieldset, FloatLabel, FormsModule, ListItemsComponent, ReactiveFormsModule],
  templateUrl: './my-collection.component.html',
  styleUrl: './my-collection.component.scss'
})
export class MyCollectionComponent {

}
