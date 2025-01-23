import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataView } from 'primeng/dataview';
import { SelectItem } from 'primeng/api';
import { mycollectionitem } from '../../shared.types';
// import { CooperHewittService } from '../services/cooper-hewitt.service';
// import { CooperHewittComponent } from '../collections/cooper-hewitt/cooper-hewitt.component';
// import { JsonArray, JsonMap } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, DataView],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  myCollections: {
    name: string;
    routerLink: string;
    logoSource: string;
    altText: string;
  }[] = [
    {
      name: 'My collection',
      routerLink: '/my-collection',
      logoSource: 'assets/images/Art_Gallery_NSW.JPG',
      altText:
        'By Paulscf at the English-language Wikipedia, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons',
    },
  ];

  collections: {
    name: string;
    routerLink: string;
    logoSource: string;
    altText: string;
  }[] = [
    {
      name: 'Art Institute of Chicago',
      routerLink: '/artic',
      logoSource: 'assets/images/art-institute-of-chicago-logo.png',
      altText: `The logo of the Art Institue of Chicago

        The Art Institute of Chicago, CC0, via Wikimedia Commons`,
    },
    {
      name: 'Cooper Hewitt, Smithsonian Design Museum',
      routerLink: '/cooper-hewitt',
      logoSource: 'assets/images/1024px-Cooper_Hewitt_(51332973313).jpg',
      altText: `The frontage of Cooper Hewitt - Smithsonian Design Museum'

        By Eden, Janine and Jim from New York City, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons`,
    },
    {
      name: 'Rijksmuseum',
      routerLink: '/rijksmuseum',
      logoSource: 'assets/images/604px-20130420_Amsterdam_04_Rijksmuseum.jpeg',
      altText: `An image of the frontage of the Rijksmuseum in Amsterdam

        By Mark Ahsmann - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=25748805`,
    },
  ];
}
