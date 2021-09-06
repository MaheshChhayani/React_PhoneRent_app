const mongoose = require('mongoose');
const CustomersDB = mongoose.model('customers');

const getCustomers = function(req,res) {
    CustomersDB.find({emailid: req.params.emailid}).exec(function (err, customerdata) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.status(200).json(customerdata);
    });
};

const getCustomerByMobileID = function(req,res) {
    CustomersDB.find({mobileid: req.params.mobileid}).exec(function (err, customerdata) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.status(200).json(customerdata);
    });
};

const createCustomer = function (req, res)
{
    CustomersDB.create({
        name: req.body.name,
        emailid: req.body.emailid,
        mobileid: req.body.mobileid,
        mobilename:req.body.mobilename,
        contactno: req.body.contactno,
        startdate: req.body.startdate,
        rentprice: req.body.rentprice
    }, (err, customerdata) => {
        if (err) 
        {
            res.status(404).json(err);
        } 
        else
        {
            res.status(200).json(customerdata);
        }
    });
};

const deleteCustomer = function (req, res) 
{
    const customerid = req.params.customerid;

    if (customerid) 
    {
        CustomersDB.findByIdAndRemove(customerid).exec((err, customerdata) => {
            if (err) 
            {
                res.status(404).json(err);
                return;
            }
            res.status(204).json(null);
        });
    } 
    else 
    {
        res.status(404).json({ "Message": "No Customer...!!!" });
    }
};


module.exports={getCustomers,createCustomer,deleteCustomer,getCustomerByMobileID};