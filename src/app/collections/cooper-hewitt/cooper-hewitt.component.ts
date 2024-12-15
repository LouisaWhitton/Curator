import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cooper-hewitt',
  imports: [NgFor],
  templateUrl: './cooper-hewitt.component.html',
  styleUrl: './cooper-hewitt.component.scss'
})
export class CooperHewittComponent {
  constructor(private httpClient: HttpClient){}

  get_listAll(): Observable<any[]>{
    return this.httpClient.get<any[]>(process.env["COOPERHEWITT_URL"]  + '?method=cooperhewitt.search.collection&access_token=' + process.env["COOPERHEWITT_TOKEN"]  + '&period_id=35417235&page=1&per_page=100')
    };
}
