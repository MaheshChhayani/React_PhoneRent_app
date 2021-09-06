var mongoose = require('mongoose');
const mobileSchema = new mongoose.Schema({
    name:{type:String},
    performance:{type:String},
    display:{type:String},
    camera:{type:String},
    battery:{type:String},
    price:{type:Number},
	imagename: {type: String}
});
mongoose.model('mobiles', mobileSchema);