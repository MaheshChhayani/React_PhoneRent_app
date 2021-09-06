import { Component, OnInit } from '@angular/core';
import { Reviews } from '../reviews';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  review : Reviews = {
    _id: '',
    name:'',
    emailid:'',
    reviewtext:'',
    rating:0   
  };

  ratings: number[] = [1,2,3,4,5];

  constructor(private service:ReviewsService) { }

  ngOnInit(): void {
  }

  public addNewReview(newReview:Reviews){
    this.service.addReview(newReview)
    .then((review:Reviews) => {
      alert("Your Review is Submitted Successfully. Thanks For Showing your interest to improving us.");
      window.location.reload();
    });;
  }

}
