import { Component, OnInit } from '@angular/core';
import { Reviews } from '../reviews';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.css']
})
export class ViewReviewsComponent implements OnInit {

  reviews : Reviews[] = []; 

  constructor(private service:ReviewsService){

  }

  ngOnInit(){
    this.service
      .getAllReviews()
      .then((reviews:Reviews[]) => {
        this.reviews = reviews.map( review => {
          return review;
        });
      });      
  }

}
