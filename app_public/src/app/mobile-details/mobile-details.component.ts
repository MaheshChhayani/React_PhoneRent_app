import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';
import { Mobiles } from '../mobiles';
import { MobilesService } from '../mobiles.service';
import { User } from '../user';

@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit {

  mobile: Mobiles;
  rentprice: number = 0;

  customers: Customers[] = [];

  customer: Customers = {
    _id: "",
    name: "",
    emailid: "",
    mobileid: "",
    rentprice: 0,
    mobilename: "",
    startdate: "",
    contactno: ""
  };

  constructor(private service: MobilesService, private customerService: CustomersService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.service.getSingleMobile(params.mobileid);
    }))
      .subscribe((newMobile: Mobiles) => {
        this.mobile = newMobile;
        this.rentprice = newMobile.price / 100 * 7;
      });
    this.route.params.pipe(switchMap((params: Params) => {
      return this.customerService
        .searchCustomer(params.mobileid);
    }))
    .subscribe((customers: Customers[]) => {
        this.customers = customers.map(mobile => {
          return mobile;
        });
      });
  }

  displayForm() {
    this.customer.rentprice = this.rentprice;
    this.customer.mobileid = this.mobile._id;
    this.customer.mobilename = this.mobile.name;
  }

  public addNewCustomer(newCustomer: Customers) {
    newCustomer.name = this.getUsername();
    newCustomer.emailid = this.getEmailID();
    this.customerService.addCustomer(newCustomer)
      .then((newCustomer: Customers) => {
        alert("Your Request is Generated and Save in our Database.");
      });;
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public getUsername(): string {
    const user: User = this.authenticationService.getCurrentUser();
    return user ? user.name : '';
  }

  public getEmailID(): string {
    const user: User = this.authenticationService.getCurrentUser();
    return user ? user.email : '';
  }
}
