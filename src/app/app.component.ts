import { Component, isDevMode } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Curator';

  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }

    localStorage.removeItem("myCollection");

    let data: any = [{
      'origin_id': 'Your collection:',
      'collection_name': 'any collection',
      'title': 'This is your place - add items',
      'originator': 'clicking the "like" button',
      'importUrl': '',
      'originUrl': ''
    }];
    localStorage.setItem('myCollection', JSON.stringify(data));
  }

}
