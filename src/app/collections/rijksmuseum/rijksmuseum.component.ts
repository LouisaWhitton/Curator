import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RijksmuseumService } from '../../services/rijksmuseum.service';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import {Listbox, ListboxModule} from 'primeng/listbox';
import { InputGroup } from 'primeng/inputgroup';
import { Fieldset } from 'primeng/fieldset';
import { FloatLabel } from 'primeng/floatlabel';
import { Fluid } from 'primeng/fluid';
import { Button } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { ListItemsComponent } from './list-items/list-items.component';
import { mycollectionitem } from '../../../shared.types';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-rijksmuseum',
  standalone: true,
  imports: [Button, Fieldset, FloatLabel, FormsModule, ListItemsComponent, ReactiveFormsModule],
  templateUrl: './rijksmuseum.component.html',
  styleUrl: './rijksmuseum.component.scss'
})
export class RijksmuseumComponent {
  @Input() allItems: any = [];
  // @Input() pageNumber: string = "1";
  // @Output() pageNumberChange = new EventEmitter<string>();
  searchString: string = "Rembrandt self portrait";
  inputSearchString: string = "Rembrandt self portrait";

  setSearchString(): void {
    this.searchString = this.inputSearchString;
  }

}
