const verify = (req, res, next) => {
    console.log("Validating the incoming request ... ")
    next()
};
module.exports = {
    verify
};