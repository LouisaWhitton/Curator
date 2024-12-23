# Curator

Curator is a web application generated with Angular.

It allows the user to view artworks in multiple collections (currently configured for Cooper Hewitt Smithsonian Design Museum and the Rijksmuseum in Amsterdam) and select or "like" items from them which appear in the user's own collection ("My Collection").

## Usage

On loading, the Home screen appears. There are two columns: the left hand column displays the collections as configured, and "My Collection" is on the right. 

[title](public/assets/images/home_page.png)

If you click on "Cooper Hewitt", it opens filtered to "Drawings, Prints and Graphic Design". There is a listbox allowing the user to filter to other departments, along with a search text box.

[title](public/assets/images/cooper_hewitt_filter.png)

A search for "Yorkshire" sadly matches no items:

[title](public/assets/images/cooper-hewitt-no-yorkshire-items.png)

However, a search for "cricket" does! Note the "like" heart button - clicking on this adds the item to "My Collection".

[title](public/assets/images/cooper-hewitt-cricket.png)

Returning, to the "Home" page, clicking on "Rijksmuseum" offers a similar search, but without the "Department" filter. Different collections offer different options for searching their data, so the developer may offer varying filter options applicable to each collection.

[title](public/assets/images/rijksmuseum-search.png)

Back to the "Home" page having "liked" items in both collections - you can now click on "My Collection" to see your curated list.

[title](public/assets/images/my-collection-example.html)

## For Developers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

### Installation

To install this project locally:

Clone the repository:
`git clone https://github.com/LouisaWhitton/Curator.git`

Install dependencies:
`npm install`

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
