var mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    name:{type:String},
    emailid:{type:String},
    contactno:{type:String},
    mobileid:{type:String},
    mobilename:{type:String},
    rentprice:{type:Number},
    startdate:{type:String},
    requestdate:{type:Date,default:Date.now}
});
mongoose.model('customers', customerSchema);