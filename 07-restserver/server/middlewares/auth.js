/**
 * 
 */

const jwt = require('jsonwebtoken');

module.exports.authToken = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.SEED_TOKEN, (err, decoded) => {
        if(err) return res.status(401).json({message: err});
        req.user = decoded.user
        next();
    }); 
};




module.exports.adminRole = (req, res, next) => {
    if(req.user.role != 'ADMIN_ROLE'){
        return res.json(401).json({message: 'User unauthorized'});
    }

    next();
};