import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Fieldset } from 'primeng/fieldset';
import { FloatLabel } from 'primeng/floatlabel';
import { Button } from 'primeng/button';
import { ListItemsComponent } from './list-items/list-items.component';

@Component({
  selector: 'app-rijksmuseum',
  standalone: true,
  imports: [Button, Fieldset, FloatLabel, FormsModule, ListItemsComponent, ReactiveFormsModule],
  templateUrl: './rijksmuseum.component.html',
  styleUrl: './rijksmuseum.component.scss'
})
export class RijksmuseumComponent {
  @Input() allItems: any = [];
  searchString: string = "Rembrandt self portrait";
  inputSearchString: string = "Rembrandt self portrait";

  setSearchString(): void {
    this.searchString = this.inputSearchString;
  }

}
