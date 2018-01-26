import { Injectable } from '@angular/core';
import { Hotel } from './hotel';
import { Observable } from 'rxjs/Observable';
import { Filter } from './filter';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class HotelService {

  private hotelsUrl = 'http://localhost:3000/hotel';

  constructor(private http: HttpClient) { }

  getHotels(filter = new Filter()): Observable<Hotel[]> {
    let params = new HttpParams();
    console.log(filter);
    if(filter.name) params = params.set('name', filter.name);
    if(filter.stars) params = params.set('stars', filter.stars.toString());
    return this.http.get<Hotel[]>(this.hotelsUrl, { params: params});
  }
}
