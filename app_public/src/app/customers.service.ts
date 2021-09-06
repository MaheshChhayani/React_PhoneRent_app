import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private api_base_url: string = "http://localhost:3000/api/customers";

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.log(error);
  }

  public getAllCustomers(emailid:string): Promise<void | Customers[]> {
    return this.http.get(this.api_base_url + "/" + emailid)
      .toPromise()
      .then(response => response as Customers[])
      .catch(this.handleError);
  }

  public addCustomer(newCustomers: Customers): Promise<void | Customers> {
    return this.http.post(this.api_base_url, newCustomers)
      .toPromise()
      .then(response => response as Customers)
      .catch(this.handleError);
  }

  public deleteSingleCustomer(customerid:string):Promise<void|Customers>{
    return this.http.delete(this.api_base_url + "/" + customerid)
      .toPromise()
      .then( response => response as Customers)
      .catch(this.handleError);
  }

  public searchCustomer(mobileid:string): Promise<void | Customers[]> {
    return this.http.get(this.api_base_url + "/search/" + mobileid)
      .toPromise()
      .then(response => response as Customers[])
      .catch(this.handleError);
  }
}
