import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthResponse } from './auth-response';
import { Reviews } from './reviews';
import { BROWSER_STORAGE } from './storage';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private apiBaseUrl = "http://localhost:3000/api/";
  private api_base_url: string = "http://localhost:3000/api/reviews";

  constructor(private http: HttpClient, @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public getAllReviews(): Promise<void | Reviews[]> {
    return this.http.get(this.api_base_url)
      .toPromise()
      .then(response => response as Reviews[])
      .catch(this.handleError);
  }

  public addReview(newReviews: Reviews): Promise<void | Reviews> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('app-token')}`
      })
    };
    return this.http.post(this.api_base_url, newReviews,httpOptions)
      .toPromise()
      .then(response => response as Reviews)
      .catch(this.handleError);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }
}
