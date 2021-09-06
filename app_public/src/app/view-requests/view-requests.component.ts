import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';
import { User } from '../user';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  customers : Customers[] = []; 

  emailid : string = "";

  constructor(private service:CustomersService,private authenticationService:AuthenticationService){

  }

  ngOnInit(){
    this.searchRequests();
  }

  searchRequests(){
    if(this.isLoggedIn()){
      this.service
      .getAllCustomers(this.getEmailID())
      .then((customers:Customers[]) => {
        this.customers = customers.map( customer => {
          return customer;
        });
      }); 
    }
    
  }

  public deleteRecord(customerid:string){
    let ans = confirm("Are You Sure to Return the Mobile?");
    if(ans){
      this.service.deleteSingleCustomer(customerid)
      .then((customer:Customers) => {
        alert("Customer Request for Returning Mobile is Successfully processed.");   
        this.searchRequests();     
      });
    }
    
  }
  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
  public getUsername(): string {
    const user: User = this.authenticationService.getCurrentUser();
    return user ? user.name : '';
  }

  public getEmailID():string{
    const user: User = this.authenticationService.getCurrentUser();
    return user ? user.email : '';
  }
}
