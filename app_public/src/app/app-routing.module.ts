import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { RegisterComponent } from './register/register.component';
import { ViewMobilesComponent } from './view-mobiles/view-mobiles.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'mobiles',component:ViewMobilesComponent},
  {path:'reviews',component:ViewReviewsComponent},
  {path:'addreview',component:AddReviewComponent},
  {path:'requests',component:ViewRequestsComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'mobile/:mobileid',component:MobileDetailsComponent},
  {path:'',redirectTo:"/home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
