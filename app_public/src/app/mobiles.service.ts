import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mobiles } from './mobiles';

@Injectable({
  providedIn: 'root'
})
export class MobilesService {

  private api_base_url: string = "http://localhost:3000/api/mobiles";

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.log(error);
  }

  public getAllMobiles():Promise<void|Mobiles[]>{
    return this.http.get(this.api_base_url)
      .toPromise()
      .then(response => response as Mobiles[])
      .catch(this.handleError);
  }

  public getSingleMobile(mobileid:string):Promise<void|Mobiles>{
    return this.http.get(this.api_base_url + "/" + mobileid)
      .toPromise()
      .then( response => response as Mobiles)
      .catch(this.handleError);
  }
}
