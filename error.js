const ErrorResponse = require('../utils/errorresponse');

const errorHandler = (err, req, res, next) => {

    let error = { ...err }
    error.message = err.message;

    console.log(err.red);

    if (err.name === 'CastError') {

        const message = `Boot camp not found with ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    if (err.code === '11000') {

        const message = `Duplicate Field value entered`;
        error = new ErrorResponse(message, 400);
    }

    if (err.name === 'ValidationError') {

        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }

    console.log(err.name);
    res.status(error.statusCode || 500).json({
        status: false,
        error: error.message || 'server error'
    });
};

module.exports = errorHandler;