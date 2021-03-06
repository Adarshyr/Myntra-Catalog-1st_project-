const logger = (req, res, next) => {
    //req.hello = ('Hello World');
    console.log(`Request details ${req.method} ${req.protocol}:/${req.get('host')}${req.originalUrl}`);
    next();
};

module.exports = logger;