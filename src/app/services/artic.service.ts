import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { articArtType } from '../../shared.types';

@Injectable({
  providedIn: 'root',
})
export class ArticService {

  constructor(private http: HttpClient) {}

  // Method to fetch from all items
  getAll(pageFrom:number, filterString: string): Observable<any> {
    return this.http
      .get<any>(
        `${process.env['ARTIC_API_URL']}artworks/search?page=${pageFrom}${filterString}`
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

  // Method to get item details
  getDetail(itemId:number): Observable<any> {
    return this.http
      .get<any>(
        `${process.env['ARTIC_API_URL']}artworks/${itemId}?fields=artist_title,image_id`
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

    // Method to fetch all art types
    getArtTypes(): Observable<{ artTypes:any }> {
      return this.http
        .get<{ artTypes:any }>(
          `${process.env['ARTIC_API_URL']}artwork-types?limit=10&fields=id,title` 
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