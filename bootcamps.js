const Bootcamp = require('../models/Bootcamp')
const ErrorResponse = require('../utils/errorresponse')
const asyncHandeler = require('../middleware/async')

exports.getBootcamps = asyncHandeler(async (req, res, next) => {


    const bootcamp = await Bootcamp.find()
    res.status(200).json({

        status: true,
        data: bootcamp
    });



    // res.status(200).json({ success: true, msg: 'show all bootcamps' });
});

exports.getBootcamp = asyncHandeler(async (req, res, next) => {

    const bootcamp = await Bootcamp.findById(req.params.id)

    if (!bootcamp) {
        next(err);
        //return next(new ErrorResponse(`Bootcamp Not found with id ${req.params.id}`, 404));
    }

    res.status(200).json({

        status: true,
        data: bootcamp
    });


});
exports.createBootcamp = asyncHandeler(async (req, res, next) => {
    //try {
    console.log(req.body);
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({

        status: true,
        data: bootcamp
    });


});

exports.updateBootcamp = asyncHandeler(async (req, res, next) => {

    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {

        new: true,
        runValidators: true
    });
    if (!bootcamp) {
        next(err);
        // res.status(400).json({status: false });
    }


    res.status(200).json({ success: true, data: bootcamp });
});

exports.deleteBootcamp = asyncHandeler(async (req, res, next) => {



    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
        //return res.status(400).json({status: false  });
        return next(err);
    }

    res.status(200).json({ success: true, data: {} });


});