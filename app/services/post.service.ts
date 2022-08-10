import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mproducts } from '../mproducts/mproducts';
import { environment } from 'src/environments/environment';
import { Constant } from '../app.constant';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  urlroute = `${environment.apiEndpoint}${Constant.apiroute.mproducts}`;
  constructor(private http: HttpClient) {}

  getPosts(): Observable<mproducts[]> {
    return this.http.get<mproducts[]>(this.urlroute);
  }
}
