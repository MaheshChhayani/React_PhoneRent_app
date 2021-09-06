const mongoose = require('mongoose');
const ReviewsDB = mongoose.model('reviews');

const getReviews = function(req,res) {
    ReviewsDB.find().exec(function (err, reviewdata) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.status(200).json(reviewdata);
    });
};

const createReview = function (req, res)
{
    ReviewsDB.create({
        name: req.body.name,
        emailid: req.body.emailid,
        reviewtext: req.body.reviewtext,
        rating: req.body.rating
    }, (err, reviewdata) => {
        if (err) 
        {
            res.status(404).json(err);
        } 
        else
        {
            res.status(200).json(reviewdata);
        }
    });
};


module.exports={getReviews,createReview};