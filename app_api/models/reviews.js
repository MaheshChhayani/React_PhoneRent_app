var mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    name:{type:String},
    emailid:{type:String},
    reviewtext:{type:String},
    rating:{type:Number},
    reviewdate:{type:Date,default:Date.now}
});
mongoose.model('reviews', reviewSchema);