import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BadUrlComponent } from './bad-url/bad-url.component';
import { HeaderComponent } from './header/header.component';
import { ViewMobilesComponent } from './view-mobiles/view-mobiles.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { MobilesService } from './mobiles.service';
import { AddReviewComponent } from './add-review/add-review.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';
import { ReviewsService } from './reviews.service';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BadUrlComponent,
    HeaderComponent,
    ViewMobilesComponent,
    MobileDetailsComponent,
    AddReviewComponent,
    ViewReviewsComponent,
    ViewRequestsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MobilesService,ReviewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
