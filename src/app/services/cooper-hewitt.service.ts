import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { cooperhewittdepartment } from '../../shared.types';

@Injectable({
  providedIn: 'root',
})
export class CooperHewittService {
  private apiUrl = process.env['COOPERHEWITT_URL'];  

  constructor(private http: HttpClient) {}

  // Method to fetch from all items
  getAll(pageFrom:number, filterString: string): Observable<any> {
    return this.http
      .get<any>(
        `${process.env['COOPERHEWITT_URL']}?method=cooperhewitt.search.collection&access_token=${process.env['COOPERHEWITT_TOKEN']}&${filterString}&page=${pageFrom}&per_page=50`
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

    // Method to fetch all departments
    getDepartments(pageFrom:number): Observable<{ departments:cooperhewittdepartment[] }> {
      return this.http
        .get<{ departments:cooperhewittdepartment[] }>(
          `${process.env['COOPERHEWITT_URL']}?method=cooperhewitt.departments.getList&access_token=${process.env['COOPERHEWITT_TOKEN']}&page=${pageFrom}&per_page=50'` 
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