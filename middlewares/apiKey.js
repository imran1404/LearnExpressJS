function apiKey(req,res,next) {
    const api_key = "1234567"
    

    if (req.query.api_key && req.query.api_key === api_key) {

        next();

    } else {
        res.json({ message: "not allowed"});
    }
    next();
}





module.exports = apiKey;