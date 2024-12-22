import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RijksmuseumService {

  constructor(private http: HttpClient) {}

  // Method to fetch from all items
  getAll(pageFrom:number, filterString: string): Observable<any> {
    return this.http
      .get<any>(
        `${process.env['RIJKSMUSEUM_URL']}collection?key=${process.env['RIJKSMUSEUM_KEY']}&q=${filterString}&p=${pageFrom}&ps=10`
      )
      .pipe(
        catchError((error) => {
          console.error('Error fetching JSON data:', error);
          return throwError(
            () => new Error('Something went wrong; please try again later.')
          );
        })
      );
  }

}
