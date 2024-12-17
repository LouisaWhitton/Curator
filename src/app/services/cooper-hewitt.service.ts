import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CooperHewittService {
  private apiUrl = process.env['COOPERHEWITT_URL'];  

  constructor(private http: HttpClient) {}

  // Method to fetch JSON data
  getAll(pageFrom:number): Observable<any> {
    return this.http
      .get<any>(
        `${process.env['COOPERHEWITT_URL']}?method=cooperhewitt.search.collection&access_token=${process.env['COOPERHEWITT_TOKEN']}&period_id=35417235&page=${pageFrom}&per_page=50'`
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