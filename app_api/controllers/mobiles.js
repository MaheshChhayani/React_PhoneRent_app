const mongoose = require('mongoose');
const MobilesDB = mongoose.model('mobiles');

const getMobiles = function(req,res) {
    MobilesDB.find().exec(function (err, mobiledata) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.status(200).json(mobiledata);
    });
};

const getSingleMobile = function(req,res) {
    MobilesDB.findById(req.params.mobileid)
        .exec((err, data) => {
            if (!data) {
                return res.status(404).json({"message": "mobile not found"});
            } else if (err) {
                return res.status(404).json(err);
            }
            res.status(200).json(data);
        });
};

module.exports={getMobiles,getSingleMobile};